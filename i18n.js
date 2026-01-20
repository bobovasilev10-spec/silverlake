/* i18n.js - WORKING base */
(() => {
  const STORAGE_KEY = "site_lang";
  const DEFAULT_LANG = "bg";

  const translations = {
    bg: {
      meta: {
        title: "Хотел и ресторант „Сребърно езеро“ | Стара Загора",
        description:
          "Хотел и ресторант „Сребърно езеро“ край Стара Загора – стаи и апартаменти, ресторант, събития, кетъринг и доставка. Резервации: 0894 343 435.",
        ogLocale: "bg_BG",
        ogTitle: "Хотел и ресторант „Сребърно езеро“ | Стара Загора",
        ogDescription:
          "Стаи и апартаменти, ресторант, събития, кетъринг и доставка край Стара Загора. Резервации: 0894 343 435.",
        twTitle: "Хотел и ресторант „Сребърно езеро“ | Стара Загора",
        twDescription:
          "Стаи и апартаменти, ресторант, събития, кетъринг и доставка край Стара Загора.",
      },
      nav: {
        home: "Начало",
        hotel: "Хотел",
        restaurant: "Ресторант",
        contact: "Контакти",
        toggleLabel: "Отвори меню",
      },
      hero: {
        videoFallback: "Вашият браузър не поддържа HTML5 видео.",
        eyebrow: "Хотел ⋆ Ресторант ⋆ Стара Загора",
        title: "Добре дошли в <span>„Сребърно езеро“</span>",
        subtitle:
          "Само на 16 км от Стара Загора, до язовир до с. Колена – място, където спокойствието, природата и вкусната храна се срещат на достъпни цени.",
        badge1: "• 20+ години традиции",
        badge2: "• Гледка към Средна гора и язовир Кумруджа",
        badge3: "• Хотел + ресторант с тераса",
        ctaRooms: "Виж стаите",
        ctaMenu: "Меню и ресторант",
      },
      booking: {
        title: "Намерете подходящите дати",
        subtitle: "Реални резервации по телефона",
        checkin: "Настаняване",
        checkout: "Напускане",
        adults: "Възрастни",
        children: "Деца",
        phoneLabel: "Телефон за връзка",
        phonePlaceholder: "пример: 0894 000 000",
        submit: "Изпрати запитване",
        footerText:
          "Или резервирайте директно на<br /><strong>0894 343 435</strong>",
      },
      complex: {
        title: "Комплекс „Сребърно езеро“",
        subtitle:
          "Хотел и ресторант с наложени традиции, фирмени стандарти и доказано качество – от повече от 20 години в региона на Стара Загора.",
        restTitle: "Ресторант „Сребърно езеро“",
        restText:
          "Салати с авторски почерк, традиционна българска кухня, риба и морски дарове, топли предястия за вегетарианци и сезонни предложения.",
        restLi1: "• Закрит салон ~100 места",
        restLi2: "• Тераса и градина ~180 места",
        restLi3: "• Барбекю на дървени въглища през топлите месеци",
        restLi4: "• Организиране на празненства и кетъринг",
        restCta: "Още за ресторанта",
        hotelTitle: "Хотел „Сребърно езеро“",
        hotelText:
          "Уютни стаи и апартаменти с гледка към язовир Кумруджа и Сърнена Средна гора, модерно обзавеждане и всички удобства за вашия престой.",
        hotelLi1: "• Хотелски стаи и апартамент с вана",
        hotelLi2: "• Централна топлофикация",
        hotelLi3: "• Безплатен паркинг и Wi-Fi",
        hotelLi4: "• Тераса с гледка към водата",
        hotelCta: "Още за хотела",
      },
      promo: {
        title: "Специални седмични предложения",
        subtitle:
          "Сребърно езеро ви препоръчва да опитате:",
        menuCta: "Виж предложението",
      },
      teaser: {
        title: "Свържете се с нас",
        subtitle:
          "Изпратете запитване за настаняване, свободни стаи и всичко свързано с хотела. Ще се свържем с вас възможно най-скоро.",
      },
      form: {
        nameLabel: "Вашето име",
        namePlaceholder: "Име и фамилия",
        emailLabel: "Имейл адрес",
        phoneLabel: "Телефон",
        typeLabel: "Тип запитване",
        typePlaceholder: "Резервация / Хотел / Друго",
        messageLabel: "Вашето запитване",
        messagePlaceholder:
          "Кратко описание на дати, брой хора и предпочитания...",
        submit: "Изпрати",
      },
      contactCard: {
        title: "Контакти",
        addressLine:
          "<strong>Адрес:</strong> Хотел и ресторант „Сребърно езеро“, с. Колена, Стара Загора",
        phonesTitle: "<strong>Телефони за контакт:</strong>",
        emailLine: "<strong>Имейл:</strong> office@srebarnoezero.com",
        note: "За резервации за уикенд и празнични дни най-сигурно е да ни потърсите по телефона.",
        cta: "Всички контакти и карта",
      },
      reviews: {
        title: "⭐ Какво казват нашите гости ⭐",
        googleLink: "View all Google reviews",
      },
      footer: {
        copyright:
          '© <span id="year"></span> Хотел и ресторант „Сребърно езеро“',
        line2: "с. Колена, Стара Загора • Тел.: 0894 343 435",
      },
      hotel: {
        videoFallback: "Вашият браузър не поддържа HTML5 видео.",
        heroEyebrow: "Хотел ⋆ Настаняване",
        heroTitle1: "Хотел",
        heroTitle2: "„Сребърно езеро“",
        heroSubtitle:
          "Уют и комфорт сред природата на Сърнена Средна гора – само на 16 км от Стара Загора, с чудесен изглед към язовир Кумруджа.",
        badge1: "Стаи и апартамент",
        badge2: "Безплатен паркинг и Wi-Fi",
        badge3: "Тераса с изглед",

        resTitle: "Резервации",
        resContacts:
          "<strong>Телефон:</strong> 0894 343 435<br /><strong>Имейл:</strong> hotel@srebarnoezero.com",
        resHint:
          "При запитване посочете желани дати, брой гости и предпочитан тип стая.",

        amenitiesTitle: "Удобства в хотела",
        amenitiesText:
          "Сребърно езеро е хотел в Стара Загора, който предлага уют, добра локация и практични удобства за кратък или по-дълъг престой.",

        accTitle: "Настаняване",
        accText:
          "Хотелът разполага с хотелски стаи и апартамент с чудесен изглед към язовира. Подходящ е за бизнес гости, семейства и двойки.",
        accLi1: "• Модерно обзавеждане",
        accLi2: "• Собствен санитарен възел",
        accLi3: "• Телевизор и Wi-Fi",
        accLi4: "• Централно отопление",

        commonTitle: "Общи удобства",
        commonLi1: "• Уют и комфорт сред природата",
        commonLi2: "• Тераса с изглед към язовир Кумруджа",
        commonLi3: "• Безплатен паркинг",
        commonLi4: "• Безплатен Wi-Fi на територията на хотела и ресторанта",
        commonLi5: "• Качествено и коректно обслужване",

        roomTypesTitle: "Типове помещения",

        room1Title: "Стандартна стая",
        room1Price: "от 30 €/вечер",
        room1Text:
          "Подходяща за едно или две лица. Възможност за двойно или единично настаняване.",
        room1Li1: "• Спалня или две отделни легла",
        room1Li2: "• Телевизор, Wi-Fi, климатик",

        room2Title: "Делукс стая",
        room2Price: "от 36 €./вечер",
        room2Text:
          "Повече пространство и комфорт – подходяща за семейства с дете или по-дълъг престой.",
        room2Li1: "• Просторна стая",
        room2Li2: "• Част от стаите с по-големи тераси",

        room3Title: "Студио",
        room3Price: "55 €/вечер",
        room3Text:
          "Студио за двама на последен етаж с хидромасажна вана – идеален за специални поводи.",

        pricesTitle: "Цени",
        tableTh1: "Тип помещение",
        tableTh2: "Стандартна стая",
        tableTh3: "Стая Делукс",
        row1Col1: "Единична",
        row1Col2: "30.00€ / 58.67 лв.",
        row1Col3: "36.00€ / 70.41 лв.",
        row2Col1: "Двойна /с 2 легла или общо двойно легло – спалня/",
        row2Col2: "36.00€ / 70.41 лв.",
        row2Col3: "46.00€ / 89.97 лв.",
        row3Col1: "Студио/апартамент за двама с общо двойно легло – спалня",
        row3Col2: "–",
        row3Col3: "55.00€ / 107.57 лв.",

        lobbyTitle: "Лоби бар",
        lobbyText:
          "Хотелът разполага и с лоби бар, където гостите могат да се насладят на закуска и да се отдадат на вкусни предложения, придружени от чаша свежо сутрешно кафе или чай. В слънчевите сутрини гостите могат да се възползват от маси на открито за още по-приятно изживяване.",

        footerLeft: '© <span id="year"></span> Хотел „Сребърно езеро“',
        footerRight: "Резервации: 0894 343 435",
      },
      restaurant: {
        metaTitle:
          "Ресторант „Сребърно езеро“ | Меню, доставка и кетъринг – Стара Загора",
        metaDescription:
          "Ресторант „Сребърно езеро“ край Стара Загора – богато меню, доставка, кетъринг и събития. Поръчки/резервации: 0894 343 435.",

        videoFallback: "Вашият браузър не поддържа HTML5 видео.",

        heroEyebrow: "Ресторант ⋆ Храна ⋆ Събития",
        heroTitle: "Ресторант „Сребърно езеро“",
        heroSubtitle:
          "Един от малкото ресторанти в Стара Загора с изключителна гледка към Средна гора и язовир Кумруджа – с богато меню и коректно обслужване.",

        badge1: "Закрита зала ~100 места",
        badge2: "Тераса и градина ~180 места",
        badge3: "Барбекю на дървени въглища",

        reserveTitle: "Резервация на маса",
        reserveText1:
          "За резервации и поръчки за вкъщи се свържете с нас на:<br /><strong>0894 343 435</strong>",
        reserveText2:
          "Препоръчително е да резервирате предварително за уикенд и празнични дни.",

        offerTitle: "Какво предлага ресторантът",
        offerText:
          "Менюто на ресторант „Сребърно езеро“ включва авторски салати, традиционни ястия, риба, морски дарове и сезонни предложения.",

        kitchenTitle: "Кухня",
        kitchenLi1: "• Богато меню от традиционни български ястия",
        kitchenLi2: "• Разнообразни сезонни предложения",
        kitchenLi3: "• Барбекю на дървени въглища през топлите месеци",
        kitchenLi4: "• Топли предястия за вегетарианци",

        atmosTitle: "Атмосфера",
        atmosLi1: "• Бързина и качество на обслужването",
        atmosLi2: "• Закрит салон с остъклена фасада и гледка",
        atmosLi3: "• Външна тераса и градина",
        atmosLi4: "• Подходящ за семейни и фирмени събития",

        eventsTitle: "Събития и кетъринг",
        eventsLi1: "• Организация на лични и семейни празненства",
        eventsLi2: "• Кръщенета, рождени дни, тиймбилдинги",
        eventsLi3: "• Професионален кетъринг на събития",
        eventsLi4: "• Възможност за доставка",

        menuTitle: "Меню",
        menuBtn: "ВИЖ МЕНЮТО",

        footerLeft: '© <span id="year"></span> Ресторант „Сребърно езеро“',
        footerRight: "Тел.: 0894 343 435",
      },
      contact: {
        videoFallback: "Вашият браузър не поддържа HTML5 видео.",

        heroEyebrow: "Контакти ⋆ Локация",
        heroTitle: "Свържете се с нас",
        heroSubtitle:
          "Изпратете запитване или ни позвънете, за да обсъдим вашия престой, събитие или вечеря в ресторанта.",

        cardTitle: "Основни контакти",
        cardAddress:
          "<strong>Адрес:</strong><br />Hotel Silver Lake, с. Колена, Стара Загора",
        cardPhones:
          "<strong>Телефон:</strong><br />0894 343 435<br />0899 923 227<br />0899 923 232",
        cardEmails:
          "<strong>Имейл:</strong><br />office@srebarnoezero.com<br />hotel@srebarnoezero.com",

        formTitle: "Форма за запитване",
        formText:
          "Попълнете полетата и опишете дали ви интересува хотелско настаняване, свободни стаи или хотела. Ще се свържем с вас възможно най-скоро.",

        nameLabel: "Вашето име",
        namePh: "Име и фамилия",
        emailLabel: "Имейл адрес",
        emailPh: "name@example.com",
        phoneLabel: "Телефон",
        phonePh: "пример: 0894 000 000",
        typeLabel: "Тип запитване",
        typePh: "Резервация / Хотел / Друго",
        msgLabel: "Вашето запитване",
        msgPh: "Кратко описание на дати, брой хора и предпочитания...",

        sendBtn: "Изпрати",

        mapTitle: "Карта и маршрут",
        mapText:
          "Комплексът се намира до язовир край с. Колена, близо до гр.Стара Загора",

        footerLeft:
          '© <span id="year"></span> Хотел и ресторант „Сребърно езеро“',
        footerRight: "С. Колена, Стара Загора • Тел.: 0894 343 435",
      },
    },

    en: {
      meta: {
        title: "Silver Lake Hotel & Restaurant | Stara Zagora",
        description:
          "Silver Lake near Stara Zagora – rooms and apartments, restaurant, events, catering and delivery. Reservations: +359 894 343 435.",
        ogLocale: "en_US",
        ogTitle: "Silver Lake Hotel & Restaurant | Stara Zagora",
        ogDescription:
          "Rooms and apartments, restaurant, events, catering and delivery near Stara Zagora. Reservations: +359 894 343 435.",
        twTitle: "Silver Lake Hotel & Restaurant | Stara Zagora",
        twDescription:
          "Rooms and apartments, restaurant, events, catering and delivery near Stara Zagora.",
      },
      nav: {
        home: "Home",
        hotel: "Hotel",
        restaurant: "Restaurant",
        contact: "Contacts",
        toggleLabel: "Open menu",
      },
      hero: {
        videoFallback: "Your browser does not support HTML5 video.",
        eyebrow: "Hotel ⋆ Restaurant ⋆ Stara Zagora",
        title: "Welcome to <span>“Silver Lake”</span>",
        subtitle:
          "Only 16 km from Stara Zagora, near the reservoir by the village of Kolena – a place where peace, nature and great food meet at fair prices.",
        badge1: "• 20+ years of tradition",
        badge2: "• View of Sredna Gora and Kumrudzha Reservoir",
        badge3: "• Hotel + terrace restaurant",
        ctaRooms: "See rooms",
        ctaMenu: "Menu & restaurant",
      },
      booking: {
        title: "Find the best dates",
        subtitle: "Real bookings by phone",
        checkin: "Check-in",
        checkout: "Check-out",
        adults: "Adults",
        children: "Children",
        phoneLabel: "Phone number",
        phonePlaceholder: "e.g. +359 894 000 000",
        submit: "Send request",
        footerText:
          "Or book directly at<br /><strong>+359 894 343 435</strong>",
      },
      complex: {
        title: "Silver Lake Complex",
        subtitle:
          "A hotel and restaurant with established traditions, standards and proven quality – for more than 20 years in the Stara Zagora region.",
        restTitle: "Silver Lake Restaurant",
        restText:
          "Signature salads, traditional Bulgarian cuisine, fish and seafood, warm vegetarian starters and seasonal specials.",
        restLi1: "• Indoor hall ~100 seats",
        restLi2: "• Terrace & garden ~180 seats",
        restLi3: "• Charcoal BBQ in the warm months",
        restLi4: "• Events and catering",
        restCta: "More about the restaurant",
        hotelTitle: "Silver Lake Hotel",
        hotelText:
          "Cozy rooms and apartments with a view to Kumrudzha Reservoir and Sarnena Sredna Gora, modern interior and all amenities for your stay.",
        hotelLi1: "• Hotel rooms and a bathtub apartment",
        hotelLi2: "• Central heating",
        hotelLi3: "• Free parking & Wi-Fi",
        hotelLi4: "• Terrace with a water view",
        hotelCta: "More about the hotel",
      },
      promo: {
        title: "Special weekly offers",
        subtitle: "Silver Lake recommends you try:",
        menuCta: "See the offer",
      },
      teaser: {
        title: "Contact us",
        subtitle:
          "Send an inquiry for accommodation, availability and anything hotel-related. We’ll get back to you as soon as possible.",
      },
      form: {
        nameLabel: "Your name",
        namePlaceholder: "Full name",
        emailLabel: "Email address",
        phoneLabel: "Phone",
        typeLabel: "Inquiry type",
        typePlaceholder: "Reservation / Hotel / Other",
        messageLabel: "Your message",
        messagePlaceholder:
          "Short details about dates, number of guests, preferences...",
        submit: "Send",
      },
      contactCard: {
        title: "Contacts",
        addressLine:
          "<strong>Address:</strong> Silver Lake Hotel & Restaurant, Kolena village, Stara Zagora",
        phonesTitle: "<strong>Phone numbers:</strong>",
        emailLine: "<strong>Email:</strong> office@srebarnoezero.com",
        note: "For weekends and holidays, the safest option is to call us for reservations.",
        cta: "All contacts & map",
      },
      reviews: {
        title: "⭐ What our guests say ⭐",
        googleLink: "View all Google reviews",
      },
      footer: {
        copyright: '© <span id="year"></span> Silver Lake Hotel & Restaurant',
        line2: "Kolena village, Stara Zagora • Tel: +359 894 343 435",
      },
      hotel: {
        videoFallback: "Your browser does not support HTML5 video.",
        heroEyebrow: "Hotel ⋆ Accommodation",
        heroTitle1: "Hotel",
        heroTitle2: "“Silver Lake”",
        heroSubtitle:
          "Cozy comfort in nature near Sarnena Sredna Gora – only 16 km from Stara Zagora, with a wonderful view of Kumrudzha Reservoir.",
        badge1: "Rooms & studio",
        badge2: "Free parking & Wi-Fi",
        badge3: "Terrace with a view",

        resTitle: "Reservations",
        resContacts:
          "<strong>Phone:</strong> +359 894 343 435<br /><strong>Email:</strong> hotel@srebarnoezero.com",
        resHint:
          "When inquiring, please include preferred dates, number of guests and room type.",

        amenitiesTitle: "Hotel amenities",
        amenitiesText:
          "Silver Lake is a hotel near Stara Zagora offering comfort, a great location and practical amenities for short or longer stays.",

        accTitle: "Accommodation",
        accText:
          "The hotel offers rooms and a studio with a great reservoir view. Suitable for business guests, families and couples.",
        accLi1: "• Modern interior",
        accLi2: "• Private bathroom",
        accLi3: "• TV and Wi-Fi",
        accLi4: "• Central heating",

        commonTitle: "General facilities",
        commonLi1: "• Comfort in nature",
        commonLi2: "• Terrace with a view of Kumrudzha Reservoir",
        commonLi3: "• Free parking",
        commonLi4: "• Free Wi-Fi across the hotel and restaurant areas",
        commonLi5: "• Quality and friendly service",

        roomTypesTitle: "Room types",

        room1Title: "Standard room",
        room1Price: "from €30 / night",
        room1Text:
          "Suitable for one or two guests. Double or single occupancy available.",
        room1Li1: "• Double bed or twin beds",
        room1Li2: "• TV, Wi-Fi, air conditioning",

        room2Title: "Deluxe room",
        room2Price: "from €36 / night",
        room2Text:
          "More space and comfort – ideal for families with a child or longer stays.",
        room2Li1: "• Spacious room",
        room2Li2: "• Some rooms have larger terraces",

        room3Title: "Studio",
        room3Price: "€55 / night",
        room3Text:
          "A top-floor studio for two with a jacuzzi bathtub – perfect for special occasions.",

        pricesTitle: "Prices",
        tableTh1: "Room type",
        tableTh2: "Standard room",
        tableTh3: "Deluxe room",
        row1Col1: "Single",
        row1Col2: "€30.00 / 58.67 BGN",
        row1Col3: "€36.00 / 70.41 BGN",
        row2Col1: "Double / twin beds or one double bed /",
        row2Col2: "€36.00 / 70.41 BGN",
        row2Col3: "€46.00 / 89.97 BGN",
        row3Col1: "Studio/apartment for two with a double bed",
        row3Col2: "–",
        row3Col3: "€55.00 / 107.57 BGN",

        lobbyTitle: "Lobby bar",
        lobbyText:
          "The hotel also has a lobby bar where guests can enjoy breakfast and tasty options with a fresh morning coffee or tea. On sunny mornings, you can also sit outside for an even nicer experience.",

        footerLeft: '© <span id="year"></span> Silver Lake Hotel',
        footerRight: "Reservations: +359 894 343 435",
      },
      restaurant: {
        metaTitle:
          "Silver Lake Restaurant | Menu, delivery & catering – Stara Zagora",
        metaDescription:
          "Silver Lake Restaurant near Stara Zagora – rich menu, delivery, catering and events. Orders/reservations: +359 894 343 435.",

        videoFallback: "Your browser does not support HTML5 video.",

        heroEyebrow: "Restaurant ⋆ Food ⋆ Events",
        heroTitle: "Silver Lake Restaurant",
        heroSubtitle:
          "One of the few restaurants near Stara Zagora with an exceptional view of Sredna Gora and Kumrudzha Reservoir – rich menu and friendly service.",

        badge1: "Indoor hall ~100 seats",
        badge2: "Terrace & garden ~180 seats",
        badge3: "Charcoal BBQ",

        reserveTitle: "Table reservation",
        reserveText1:
          "For reservations and takeaway orders, contact us at:<br /><strong>+359 894 343 435</strong>",
        reserveText2:
          "We recommend booking in advance for weekends and holidays.",

        offerTitle: "What we offer",
        offerText:
          "The menu includes signature salads, traditional dishes, fish, seafood and seasonal specials.",

        kitchenTitle: "Cuisine",
        kitchenLi1: "• Rich menu of traditional Bulgarian dishes",
        kitchenLi2: "• Seasonal specials",
        kitchenLi3: "• Charcoal BBQ during the warm months",
        kitchenLi4: "• Warm vegetarian starters",

        atmosTitle: "Atmosphere",
        atmosLi1: "• Fast and quality service",
        atmosLi2: "• Indoor hall with glass facade and a view",
        atmosLi3: "• Outdoor terrace and garden",
        atmosLi4: "• Suitable for family and corporate events",

        eventsTitle: "Events & catering",
        eventsLi1: "• Organization of private and family celebrations",
        eventsLi2: "• Christenings, birthdays, team buildings",
        eventsLi3: "• Professional event catering",
        eventsLi4: "• Delivery option available",

        menuTitle: "Menu",
        menuBtn: "VIEW MENU",

        footerLeft: '© <span id="year"></span> Silver Lake Restaurant',
        footerRight: "Tel: +359 894 343 435",
      },
      contact: {
        videoFallback: "Your browser does not support HTML5 video.",

        heroEyebrow: "Contacts ⋆ Location",
        heroTitle: "Contact us",
        heroSubtitle:
          "Send an inquiry or give us a call to discuss your stay, event or dinner at the restaurant.",

        cardTitle: "Main contacts",
        cardAddress:
          "<strong>Address:</strong><br />Hotel Silver Lake, Kolena village, Stara Zagora",
        cardPhones:
          "<strong>Phone:</strong><br />+359 894 343 435<br />+359 899 923 227<br />+359 899 923 232",
        cardEmails:
          "<strong>Email:</strong><br />office@srebarnoezero.com<br />hotel@srebarnoezero.com",

        formTitle: "Inquiry form",
        formText:
          "Fill in the fields and describe whether you’re interested in accommodation, room availability or something else. We’ll get back to you as soon as possible.",

        nameLabel: "Your name",
        namePh: "First and last name",
        emailLabel: "Email address",
        emailPh: "name@example.com",
        phoneLabel: "Phone",
        phonePh: "e.g. +359 894 000 000",
        typeLabel: "Inquiry type",
        typePh: "Reservation / Hotel / Other",
        msgLabel: "Your message",
        msgPh:
          "Short description of dates, number of guests and preferences...",

        sendBtn: "Send",

        mapTitle: "Map & directions",
        mapText:
          "The complex is located near a reservoir by Kolena village, close to Stara Zagora.",

        footerLeft: '© <span id="year"></span> Silver Lake Hotel & Restaurant',
        footerRight: "Kolena village, Stara Zagora • Tel: +359 894 343 435",
      },
    },
  };
  function getLang() {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "en" || v === "bg" ? v : DEFAULT_LANG;
  }

  function setLang(lang) {
    const normalized = lang === "en" ? "en" : "bg";
    localStorage.setItem(STORAGE_KEY, normalized);
    applyLang(normalized);
  }

  function getByPath(obj, path) {
    return path
      .split(".")
      .reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
  }

  // Switch language-dependent links (e.g. menu PDF)
  function applyLangLinks(lang) {
    const menuLink = document.getElementById("menuPdfLink");
    if (menuLink) {
      menuLink.href = lang === "en" ? "menu_EN.pdf" : "menu.pdf";
    }
  }


  function applyLang(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    // html lang
    document.documentElement.setAttribute("lang", lang);

    // title + meta description
    const title = getByPath(dict, "meta.title");
    if (title) document.title = title;

    const desc = getByPath(dict, "meta.description");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (desc && metaDesc) metaDesc.setAttribute("content", desc);

    // translate elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(dict, key);
      if (val != null) el.innerHTML = String(val);
    });

    // translate attributes: placeholder / aria-label etc
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const raw = el.getAttribute("data-i18n-attr") || "";
      raw
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean)
        .forEach((pair) => {
          const [attr, key] = pair.split(":").map((x) => x.trim());
          if (!attr || !key) return;
          const val = getByPath(dict, key);
          if (val != null) el.setAttribute(attr, String(val));
        });
    });

    // toggle button label
    const btn =
      document.querySelector("[data-lang-toggle]") ||
      document.querySelector(".lang-switch");
    if (btn) btn.textContent = lang === "bg" ? "EN" : "BG";

    // update language-dependent links
    applyLangLinks(lang);

  }

  function attachToggle() {
    const btn =
      document.querySelector("[data-lang-toggle]") ||
      document.querySelector(".lang-switch");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const cur = getLang();
      setLang(cur === "bg" ? "en" : "bg");
    });
  }

  function boot() {
    attachToggle();
    applyLang(getLang());
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.i18n = { getLang, setLang, apply: applyLang };
})();
