<?php
declare(strict_types=1);
session_start();

$TO_EMAIL   = 'hotel@srebarnoezero.com';
$FROM_EMAIL = 'hotel@srebarnoezero.com';
$SITE_NAME  = 'Srebarno Ezero';

$REDIRECT_OK   = 'index.html?booking=1#booking';
$REDIRECT_FAIL = 'index.html?booking=0#booking';

function clean(string $s, int $maxLen = 200): string {
  $s = trim($s);
  $s = str_replace(["\r", "\n"], " ", $s);
  if (mb_strlen($s) > $maxLen) $s = mb_substr($s, 0, $maxLen);
  return $s;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  header("Location: $REDIRECT_FAIL"); exit;
}

// Honeypot
if (!empty($_POST['website'] ?? '')) {
  header("Location: $REDIRECT_OK"); exit;
}

// Rate limit (10 sec)
$now = time();
$_SESSION['last_booking_ts'] = $_SESSION['last_booking_ts'] ?? 0;
if ($now - (int)$_SESSION['last_booking_ts'] < 10) {
  header("Location: $REDIRECT_FAIL"); exit;
}

$checkin  = clean((string)($_POST['checkin'] ?? ''), 30);
$checkout = clean((string)($_POST['checkout'] ?? ''), 30);
$adults   = clean((string)($_POST['adults'] ?? ''), 10);
$children = clean((string)($_POST['children'] ?? ''), 10);
$phone    = clean((string)($_POST['phone'] ?? ''), 60);

if ($checkin === '' || $checkout === '' || $phone === '') {
  header("Location: $REDIRECT_FAIL"); exit;
}

$subject = "Резервационно запитване – $SITE_NAME";

$body  = "Ново резервационно запитване\n\n";
$body .= "Настаняване: $checkin\n";
$body .= "Напускане: $checkout\n";
$body .= "Възрастни: $adults\n";
$body .= "Деца: $children\n";
$body .= "Телефон: $phone\n";
$body .= "----------------------\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
$body .= "Дата: " . date('Y-m-d H:i:s') . "\n";

$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: $SITE_NAME <$FROM_EMAIL>";
$headers[] = "Reply-To: $FROM_EMAIL";

$ok = @mail($TO_EMAIL, $subject, $body, implode("\r\n", $headers));

$_SESSION['last_booking_ts'] = $now;
header("Location: " . ($ok ? $REDIRECT_OK : $REDIRECT_FAIL));
exit;
