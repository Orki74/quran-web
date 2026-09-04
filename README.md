# 📖 Quran Web - Kuran-ı Kerim

Arapça okunuşunun altında Türkçe telaffuzu bulunan, modern ve interaktif bir Quran web uygulaması.

## 🌟 Özellikler

✅ **Arapça Metin & Türkçe Telaffuz** - Her ayet Arapça okunuş ve Türkçe telaffuzla birlikte  
✅ **Sayfa Sayfa Okuma** - Kitap gibi sure sayfa başına görüntülenebiliyor  
✅ **Arama Özelliği** - Sure adı veya ayet içeriğinde arama yapabilme  
✅ **Kolay Navigasyon** - İleri/geri, ilk/son sure butonları ve ok tuş desteği  
✅ **Responsive Tasarım** - Mobil, tablet ve bilgisayardan erişilebiliyor  
✅ **Sure Seçici** - Açılır menüden hızlıca sure seçme  
✅ **Sayfa Bilgisi** - Mevcut sure ve sayfa göstergesi  

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Modern web tarayıcı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı

### Kullanım
1. Repository'yi klonlayın veya indirin
```bash
git clone https://github.com/Orki74/quran-web.git
cd quran-web
```

2. `index.html` dosyasını bir web tarayıcısında açın veya bir web sunucusu üzerinde çalıştırın
```bash
# Python 3 ile basit sunucu başlatma
python -m http.server 8000

# Node.js http-server ile
npx http-server
```

3. Tarayıcıda `http://localhost:8000` adresini açın

## 📱 Kullanım Rehberi

### Navigasyon
- **← Önceki Sure / Sonraki Sure →** - Sureler arasında gezinme
- **‹ Önceki / Sonraki ›** - Sayfa değiştirme
- **« İlk Sure / Son Sure »** - İlk veya son surenin gösterilmesi
- **Ok tuşları** - (Arama kutusu aktif değilken) İleri/geri navigasyon

### Arama
1. Üst kısımdaki arama kutusuna tıklayın
2. Sure adını (örn: "Fatiha") veya ayet içeriğini yazın
3. Sonuçlardan birini seçin
4. Seçilen sure/ayet otomatik olarak gösterilecektir

### Sure Seçme
- Açılır menüden doğrudan sure seçebilirsiniz
- Sure numarası veya adı görüntülenir

## 📂 Dosya Yapısı

```
quran-web/
├── index.html          # Ana HTML dosyası
├── styles.css          # Tasarım dosyası
├── script.js           # İşlevsellik (JavaScript)
├── quran-data.js       # Quran verileri (Arapça + Telaffuz)
└── README.md           # Bu dosya
```

## 🎨 Tasarım Özellikleri

- **Modern Arayüz** - Gradyan renkleriyle profesyonel tasarım
- **Kitap Benzeri Görünüm** - Ayet kartları kitap sayfası gibi düzenlenmiş
- **Koyu/Açık Mod** - Gözler üzerinde az yük
- **Sürükle-Bırak Desteği** - Gelecek versiyonlarda eklenecek

## 🔧 Teknik Bilgiler

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Veri Formatı**: JavaScript Object Notation (JSON)
- **Desteklenen Tarayıcılar**: Chrome, Firefox, Safari, Edge (son versiyonlar)
- **Mobil Desteği**: iOS Safari, Chrome Android

## 📝 Veri Kaynağı

Quran verileri (Arapça metinler ve Türkçe telaffuzlar) `quran-data.js` dosyasında saklanmaktadır. Halihazırda ilk 10 Sure örnek olarak eklenmiştir. Tüm 114 Surenin verileri eklemek için dosyayı genişletebilirsiniz.

## 🌐 Veri Ekleme

Yeni sureler eklemek için `quran-data.js` dosyasını düzenleyin:

```javascript
{
    number: 11,
    name: "Hud",
    nameArabic: "هود",
    verseCount: 123,
    revelationType: "Makkah",
    verses: [
        { number: 1, arabic: "الر ۚ كِتَابٌ أُحْكِمَتْ آيَاتُهُ", transliteration: "Elif, Lâm, Ra; kitâbun uhkimet âyâtuh" },
        // Diğer ayetler...
    ]
}
```

## 🚀 Gelecek Özellikler

- [ ] Tüm 114 Sure'nin tam verileri
- [ ] Ses/telaffuz dinleme
- [ ] İngilizce ve Arapça anlamlar
- [ ] Yazı tipi boyutu ayarı
- [ ] Gece modu (Dark Mode)
- [ ] Ayetleri favorilere ekleme
- [ ] Notlar ekleme
- [ ] PDF İndirme
- [ ] Çevrimdışı okuma modu

## 📄 Lisans

Bu proje açık kaynaklıdır ve özgürce kullanılabilir.

## 👤 Geliştirici

**Orki74** - GitHub: [@Orki74](https://github.com/Orki74)

## 📞 İletişim & Katkıda Bulunma

Hataları bildirmek veya önerilerde bulunmak için GitHub Issues sayfasını kullanabilirsiniz.

---

**Kuran-ı Kerim'i okumak için başlamaya hazırsınız!** 📖✨

Sorularınız varsa veya katkıda bulunmak istiyorsanız bize ulaşın.

**Duanız kabul olsun!** 🤲
