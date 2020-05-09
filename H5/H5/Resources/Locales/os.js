H5.merge(new System.Globalization.CultureInfo("os", true), {
    englishName: "Ossetic",
    nativeName: "ирон",

    numberFormat: H5.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "НН",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "₾",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: H5.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["хцб","крс","дцг","ӕрт","цпр","мрб","сбт"],
        abbreviatedMonthGenitiveNames: ["янв.","фев.","мар.","апр.","майы","июны","июлы","авг.","сен.","окт.","ноя.","дек.",""],
        abbreviatedMonthNames: ["Янв.","Февр.","Март.","Апр.","Май","Июнь","Июль","Авг.","Сент.","Окт.","Нояб.","Дек.",""],
        amDesignator: "AM",
        dateSeparator: ".",
        dayNames: ["хуыцаубон","къуырисӕр","дыццӕг","ӕртыццӕг","цыппӕрӕм","майрӕмбон","сабат"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM, yyyy 'аз' HH:mm:ss",
        longDatePattern: "dddd, d MMMM, yyyy 'аз'",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["январы","февралы","мартъийы","апрелы","майы","июны","июлы","августы","сентябры","октябры","ноябры","декабры",""],
        monthNames: ["Январь","Февраль","Мартъи","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["хцб","крс","дцг","ӕрт","цпр","мрб","сбт"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: H5.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "os-GE",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});