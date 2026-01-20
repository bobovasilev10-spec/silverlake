<?php
declare(strict_types=1);
session_start();

$TO_EMAIL   = 'hotel@srebarnoezero.com';
$FROM_EMAIL = 'hotel@srebarnoezero.com';   // важно: реален mailbox => по-добра доставяемост
$SITE_NAME  = 'Srebarno Ezero';

$REDIRECT_OK   = 'index.html?sent=1#contact';
$REDIRECT_FAIL = 'index.html?sent=0#contact';

function clean(string $s, int $maxLen = 2000): string {
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
$_SESSION['last_mail_ts'] = $_SESSION['last_mail_ts'] ?? 0;
if ($now - (int)$_SESSION['last_mail_ts'] < 10) {
  header("Location: $REDIRECT_FAIL"); exit;
}

$name    = clean((string)($_POST['name'] ?? ''), 120);
$email   = clean((string)($_POST['email'] ?? ''), 160);
$phone   = clean((string)($_POST['phone'] ?? ''), 60);
$type    = clean((string)($_POST['type'] ?? ''), 120);
$message = trim((string)($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
  header("Location: $REDIRECT_FAIL"); exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: $REDIRECT_FAIL"); exit;
}
if (mb_strlen($message) > 5000) $message = mb_substr($message, 0, 5000);

$subject = "Ново запитване от сайта – $SITE_NAME";

$body  = "Ново запитване от сайта\n\n";
$body .= "Име: $name\n";
$body .= "Имейл: $email\n";
$body .= "Телефон: $phone\n";
$body .= "Тип: $type\n";
$body .= "----------------------\n";
$body .= "Съобщение:\n$message\n";
$body .= "----------------------\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
$body .= "Дата: " . date('Y-m-d H:i:s') . "\n";

$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: $SITE_NAME <$FROM_EMAIL>";
$headers[] = "Reply-To: $name <$email>";

$ok = @mail($TO_EMAIL, $subject, $body, implode("\r\n", $headers));

$_SESSION['last_mail_ts'] = $now;
header("Location: " . ($ok ? $REDIRECT_OK : $REDIRECT_FAIL));
exit;
