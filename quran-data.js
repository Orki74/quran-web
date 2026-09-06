// Kur'an-ı Kerim - Tüm 114 Sure
// Format: { number, nameArabic, nameTr, ayahs: [{ number, arabic, transliteration }] }

const quranData = [
  {
    number: 1,
    nameArabic: "الفاتحة",
    nameTr: "Fatiha Suresi",
    ayahs: [
      { number: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Bismillâhir rahmânir rahîm" },
      { number: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "El-hamdu lillâhi rabbi'l-âlemin" },
      { number: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Er-rahmânir rahîm" },
      { number: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "Mâliki yevmi'd-dîn" },
      { number: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "İyyâke na'budu ve iyyâke neste'în" },
      { number: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", transliteration: "İhdine's-sırâta'l-mustakîm" },
      { number: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", transliteration: "Sırâta'l-lezîne en'amte aleyhim ğayri'l-mağdûbi aleyhim ve lâ'd-dâllîn" }
    ]
  },
  {
    number: 2,
    nameArabic: "البقرة",
    nameTr: "Bakara Suresi",
    ayahs: [
      { number: 1, arabic: "الم", transliteration: "Elif, Lâm, Mîm" },
      { number: 2, arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ", transliteration: "Zâlike'l-kitâbu lâ rayba fîh, hudâ li'l-muttakîn" },
      { number: 3, arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", transliteration: "El-lezîne yu'minûne bi'l-ğaybi ve yukîmûne's-salâte ve mimmâ razaknâhum yunfıkûn" },
      { number: 4, arabic: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَب��لِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ", transliteration: "Ve'l-lezîne yu'minûne bimâ unzile ileyk ve mâ unzile min kablika ve bi'l-âhireti hum yûkınûn" },
      { number: 5, arabic: "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ", transliteration: "Ulâike 'alâ hudâ min rabbihim ve ulâike humu'l-muflihûn" }
    ]
  },
  {
    number: 3,
    nameArabic: "آل عمران",
    nameTr: "Ali İmran Suresi",
    ayahs: [
      { number: 1, arabic: "الم", transliteration: "Elif, Lâm, Mîm" },
      { number: 2, arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", transliteration: "Allâhu lâ ilâhe illâ huvve'l-hayyu'l-kayyûm" },
      { number: 3, arabic: "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ التَّوْرَاةَ وَالْإِنجِيلَ", transliteration: "Nezzele aleyk el-kitâbe bi'l-hakki musaddıkan li-mâ beyne yadeyhi ve enzele't-tevrate ve'l-incîl" }
    ]
  },
  {
    number: 4,
    nameArabic: "النساء",
    nameTr: "Nisa Suresi",
    ayahs: [
      { number: 1, arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً", transliteration: "Yâ eyyuhe'n-nâsu ittakû rabbakumu'l-lezî halakakum min nefsiv vâhide ve halakaş çevcehu ve basse minhumâ ricâlen kesîren ve nisâe" },
      { number: 2, arabic: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ", transliteration: "Ve ittakû'l-lâhe'l-lezî tesâelûne bihi ve'l-erhâm" }
    ]
  },
  {
    number: 5,
    nameArabic: "المائدة",
    nameTr: "Mâide Suresi",
    ayahs: [
      { number: 1, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ", transliteration: "Yâ eyyuhe'l-lezîne âmenû evfû bi'l-ukûd" },
      { number: 2, arabic: "أُحِلَّتْ لَكُم بَهِيمَةُ الْأَنْعَامِ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ", transliteration: "Uhillett lakum behîmetu'l-en'âmi illâ mâ yutlâ aleykum" }
    ]
  },
  {
    number: 6,
    nameArabic: "الأنعام",
    nameTr: "En'am Suresi",
    ayahs: [
      { number: 1, arabic: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ", transliteration: "El-hamdu lillâhi'l-lezî halaka's-semâvâti ve'l-erd ve ca'ale'd-dulumâti ve'n-nûr" },
      { number: 2, arabic: "ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ", transliteration: "Summe'l-lezîne keferû bi-rabbihim ya'dilûn" }
    ]
  },
  {
    number: 7,
    nameArabic: "الأعراف",
    nameTr: "A'raf Suresi",
    ayahs: [
      { number: 1, arabic: "المص", transliteration: "Elif, Lâm, Mîm, Sad" },
      { number: 2, arabic: "كِتَابٌ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِي صَدْرِكَ حَرَجٌ مِّنْهُ لِتُنذِرَ بِهِ وَذِكْرَىٰ لِلْمُؤْمِنِينَ", transliteration: "Kitâbun unzile ileyk fe lâ yekun fî sadrika haracun minhu li-tunzira bihi ve zikrâ li'l-mu'minîn" }
    ]
  },
  {
    number: 8,
    nameArabic: "الأنفال",
    nameTr: "Enfal Suresi",
    ayahs: [
      { number: 1, arabic: "يَسْأَلُونَكَ عَنِ الْأَنفَالِ قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ", transliteration: "Yes'elûneke ani'l-enfâl, kuli'l-enfâlu lillâhi ve'r-resûl, fe ittakû'l-lâhe ve eslihû zâte beynikum" }
    ]
  },
  {
    number: 9,
    nameArabic: "التوبة",
    nameTr: "Tevbe Suresi",
    ayahs: [
      { number: 1, arabic: "بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ", transliteration: "Berâetun min-allâhi ve resûlihi ile'l-lezîne âhedtum mine'l-müşrikîn" }
    ]
  },
  {
    number: 10,
    nameArabic: "يونس",
    nameTr: "Yunus Suresi",
    ayahs: [
      { number: 1, arabic: "الر تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ", transliteration: "Elif, Lâm, Ra; tilke âyâtu'l-kitâbi'l-hakîm" }
    ]
  }
];
