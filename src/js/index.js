import Products from "./models/Products";
import * as productsView from "./views/productsView";

// Products Contoller
const cevizType = ["Kabuklu Niksar Cevizi", "Kabuksuz Niksar İç Cevizi"];
const mahlepType = ["Mahlep"];
const fındıkType = ["Kabuklu Fındık"];
const balYapragiType= ["Niksar Bağ Yaprağı"];
const baharatType =["Tuz","Karabiber","Kimyon","Biberiye","Fesleğen","Çörek otu","Kekik","Köri","Zerdeçal","Rezene","Defne Yaprağı","Kişniş","Karanfil"];
const datcaMacunuType =["Datça Macunu"];
const products = new Products();
products.addItem(
  0,
  "Ceviz",
  "10. ayda olgunlaşan ceviz 11. ayda satışa hazır olarak piyasaya çıkıyor. Yerli cevizlerimiz Türkiye'nin heryerinde satışa sunulmaktadır. Ürünümüz organik olup hiçbir katkı maddesi içermemektedir. ",
  "../images/walnut.jpg",
  cevizType
);
products.addItem(
  1,
  "Mahlep",
  "6. ayda toplanmaya başlanır.İlk ürün 7. ayda satışa hazır olarak piyasaya sunulur.Yerli ürünümüzün komisyoncular aracılığıyla ihracatı yapılmaktadır.",
  "../images/mahlep.jpg",
  mahlepType
);
products.addItem(
  2,
  "Fındık",
  "Fındık yağı E vitamini açısından zengin bir kaynaktır. Bağışıklık sistemini güçlendirmesi ile bilinen E vitamini kırmızı kan hücrelerinin parçalanmasını önleyerek anemi riskini azaltır. Doğru kan dolaşımı, ateş, soğuk algınlığı ve diğer hastalıkların oluşma riskini azaltarak bağışıklık sistemini güçlendirir.  ",
  "../images/hazelnut.jpg",
  fındıkType
);
products.addItem(
  3,
  "Niksar Bağ Yaprağı",
  "Dolma sarımı  için idealdir ayrıca yumuşak ve lezzetli olan  Niksar bağ yaprağımız vücut sağlığı  için de oldukça  faydalıdır. Göz sağlığını korur, bağırsakları korur, varis tedavisinde etkilidir, ağız yaralarını iyileştirir, kilo vermeye yardımcı olur, saç problemlerini önler.",
  "../images/tokat-leaf.jpg",
  balYapragiType
);
products.addItem(
  4,
  "Datça Macunu",
  "Boğazda biriken balgamı sökmede etkili olan karışım yemek borusu kanseri gibi ciddi durumları engeller. Datça macunu vücuttaki alerjik hücrelerin sayısını azaltarak vücudun reaksiyonunu önler. Vücuttaki hücreleri yenileyerek cildi onarır. Yaşlanma ve kırışma gibi sağlık sorunlarının riskini azaltır.",
  "../images/datca-paste.jpg",
  datcaMacunuType
);
products.addItem(
  5,
  "Baharatlar",
  "Lezzet ve hoş kokularıyla sofralarımızın baş tacı olan baharatlar içerdikleri antioksidanlarla bağışıklık sistemini güçlendirirken birçok hastalığın sağlığımıza olan olumsuz etkilerinin önüne geçerler. Onlarca baharat çeşitleri aktarımızda mevcuttur.",
  "../images/spices.jpg",
  baharatType
);

window.addEventListener('load', () => {
  var categoryId = location.href;
  categoryId = categoryId.split('#');
  products.items.forEach((element) => {
    if (categoryId[1] == element.id) {
      productsView.display(element);
    }
  });
});

$(".btn").click(function () {
    var categoryId = $(this).data("category-id");
    products.items.forEach((element) => {
      if (categoryId === element.id) {
        productsView.display(element);
      }
    });
});