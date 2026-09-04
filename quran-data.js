// Quran Data - İlk 10 Sure (Surah) ile örnek
// Format: { surah: Sure Adı, verses: [{ number: Ayet No, arabic: Arapça Metin, transliteration: Türkçe Telaffuz }] }

const quranData = [
    {
        number: 1,
        name: "Fatiha",
        nameArabic: "الفاتحة",
        verseCount: 7,
        revelationType: "Makkah",
        verses: [
            { number: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Bismillahir rahmanir rahim" },
            { number: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "El-hamdu lillahi rabbi'l-âlemin" },
            { number: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Errahmanir rahim" },
            { number: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "Maliki yevmi'd-din" },
            { number: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "İyyake na'budu ve iyyake nesteîn" },
            { number: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", transliteration: "İhdinessırâta'l-mustakîm" },
            { number: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", transliteration: "Sırâta'l-lezîne en'amte aleyhim ğayri'l-mağdûbi aleyhim ve lâd-dâllîn" }
        ]
    },
    {
        number: 2,
        name: "Bakara",
        nameArabic: "البقرة",
        verseCount: 286,
        revelationType: "Madina",
        verses: [
            { number: 1, arabic: "الم", transliteration: "Elif, Lâm, Mîm" },
            { number: 2, arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ", transliteration: "Zâlike'l-kitâbu lâ rayba fîhi, hudan li'l-muttakîn" },
            { number: 3, arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", transliteration: "El-lezîne yu'minûne bi'l-ğaybi ve yukim̂une's-salâte ve mimme rezaknâhum yunfikûn" },
            { number: 4, arabic: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ", transliteration: "Ve'l-lezîne yu'minûne bimâ unzile ileyka ve mâ unzile min kablike ve bi'l-âhirati hum yukinûn" },
            { number: 5, arabic: "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ", transliteration: "Ulâike alâ hudan min rabbihim ve ulâike humu'l-muflihûn" }
        ]
    },
    {
        number: 3,
        name: "Al-İmran",
        nameArabic: "آل عمران",
        verseCount: 200,
        revelationType: "Madina",
        verses: [
            { number: 1, arabic: "الم", transliteration: "Elif, Lâm, Mîm" },
            { number: 2, arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", transliteration: "Allahu lâ ilâhe illâ huvve'l-hayyu'l-kayyûm" },
            { number: 3, arabic: "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ التَّوْرَاةَ وَالْإِنجِيلَ", transliteration: "Nezzele aleyka'l-kitâba bi'l-hakki musaddikan li-mâ beyne yedeyhi ve enzele't-Tevrate ve'l-încîl" }
        ]
    },
    {
        number: 4,
        name: "Nisa",
        nameArabic: "النساء",
        verseCount: 176,
        revelationType: "Madina",
        verses: [
            { number: 1, arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا", transliteration: "Yâ eyyuhe'n-nâsu'ttaku rabbukumu'l-lezî halakakum min nefsîn vâhidatin ve halaka minhâ zevce-hâ ve basse minhumâ ricâlen kesîran ve nisâ'; ve'ttaku'l-lâhe'l-lezî tesâ'elûne bih ve'l-erhâm; inne'l-lâhe kâne aleykum rakîbâ" }
        ]
    },
    {
        number: 5,
        name: "Maida",
        nameArabic: "المائدة",
        verseCount: 120,
        revelationType: "Madina",
        verses: [
            { number: 1, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ ۚ أُحِلَّتْ لَكُم بَهِيمَةُ الْأَنْعَامِ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ غَيْرَ مُحِلِّي الصَّيْدِ وَأَنتُمْ حُرُمٌ ۗ إِنَّ اللَّهَ يَحْكُمُ مَا يُرِيدُ", transliteration: "Yâ eyyuhe'l-lezîne âmenû evfû bi'l-ukûd; uhillet lekum behîmetu'l-en'âm illâ mâ yutlâ aleykum ğayre muhilli's-saydi ve entum hurum; inne'l-lâhe yahkumu mâ yurîd" }
        ]
    },
    {
        number: 6,
        name: "En'am",
        nameArabic: "الأنعام",
        verseCount: 165,
        revelationType: "Makkah",
        verses: [
            { number: 1, arabic: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ۖ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ", transliteration: "El-hamdu li'l-lâhi'l-lezî halaka's-semâvâti ve'l-ard ve ceale'z-zulumâti ve'n-nûr; summe'l-lezîne keferû bi-rabbihim ya'dilûn" }
        ]
    },
    {
        number: 7,
        name: "A'raf",
        nameArabic: "الأعراف",
        verseCount: 206,
        revelationType: "Makkah",
        verses: [
            { number: 1, arabic: "المص", transliteration: "Elif, Lâm, Mîm, Sad" },
            { number: 2, arabic: "كِتَابٌ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِي صَدْرِكَ حَرَجٌ مِّنْهُ لِتُنذِرَ بِهِ وَذِكْرَىٰ لِلْمُؤْمِنِينَ", transliteration: "Kitâbun unzile ileyka fe-lâ yekun fî sadrika harecun minhu li-tunzir bih ve zikrâ li'l-mu'minîn" }
        ]
    },
    {
        number: 8,
        name: "Enfal",
        nameArabic: "الأنفال",
        verseCount: 75,
        revelationType: "Madina",
        verses: [
            { number: 1, arabic: "يَسْأَلُونَكَ عَنِ الْأَنفَالِ ۖ قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ ۖ فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ ۖ وَأَطِيعُوا اللَّهَ وَرَسُولَهُ إِن كُنتُم مُّؤْمِنِينَ", transliteration: "Yesâ'elûneke ani'l-enfâl; kuli'l-enfâlu li'l-lâhi ve'r-resûl; fe'ttaku'l-lâhe ve aslihû zâte beynekum ve etî'u'l-lâhe ve resûleh, in kuntum mu'minîn" }
        ]
    },
    {
        number: 9,
        name: "Tevbe",
        nameArabic: "التوبة",
        verseCount: 129,
        revelationType: "Madina",
        verses: [
            { number: 1, arabic: "بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ", transliteration: "Berâ'etun mine'l-lâhi ve resûlih ile'l-lezîne âhattum mine'l-müşrikîn" }
        ]
    },
    {
        number: 10,
        name: "Yunus",
        nameArabic: "يونس",
        verseCount: 109,
        revelationType: "Makkah",
        verses: [
            { number: 1, arabic: "الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ", transliteration: "Elif, Lâm, Ra; tilke âyâtu'l-kitâbi'l-hakîm" },
            { number: 2, arabic: "أَكَانَ لِلنَّاسِ عَجَبًا أَن أَوْحَيْنَا إِلَىٰ رَجُلٍ مِّنْهُمْ أَن أَنذِرِ النَّاسَ وَبَشِّرِ الَّذِينَ آمَنُوا أَنَّ لَهُمْ قَدَمَ صِدْقٍ عِندَ رَبِّهِمْ ۗ قَالَ الْكَافِرُونَ إِنَّ هَٰذَا لَسَاحِرٌ مُّبِينٌ", transliteration: "E-kâne li'n-nâsi aceben en evhaynâ ilâ reculin minhum en enzir en-nâs ve beşşir el-lezîne âmenû enne lehum kadem sıdkun inde rabbihim; kâle'l-kâfirûn inne hâze le-sâhiru mubîn" }
        ]
    }
];

// Tüm Surelerin Listesi (İlk 30 Sure için örnek - tam liste 114 Sure olabilir)
const allSurahNames = [
    { number: 1, name: "Fatiha" },
    { number: 2, name: "Bakara" },
    { number: 3, name: "Al-İmran" },
    { number: 4, name: "Nisa" },
    { number: 5, name: "Maida" },
    { number: 6, name: "En'am" },
    { number: 7, name: "A'raf" },
    { number: 8, name: "Enfal" },
    { number: 9, name: "Tevbe" },
    { number: 10, name: "Yunus" },
    { number: 11, name: "Hud" },
    { number: 12, name: "Yusuf" },
    { number: 13, name: "Rad" },
    { number: 14, name: "İbrahim" },
    { number: 15, name: "Hijr" },
    { number: 16, name: "Nahl" },
    { number: 17, name: "İsra" },
    { number: 18, name: "Kehf" },
    { number: 19, name: "Meryem" },
    { number: 20, name: "Taha" },
    { number: 21, name: "Enbiya" },
    { number: 22, name: "Hajj" },
    { number: 23, name: "Muminun" },
    { number: 24, name: "Nur" },
    { number: 25, name: "Furkan" },
    { number: 26, name: "Şuara" },
    { number: 27, name: "Neml" },
    { number: 28, name: "Kasas" },
    { number: 29, name: "Ankebut" },
    { number: 30, name: "Rum" }
];
