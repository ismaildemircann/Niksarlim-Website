// Nuts Controller
const clearHtml = () => {
    document.querySelector("#intro-nuts").innerHTML = "";
  };
  const nuts = (mediaQuery) => {
    let mark;
    if (mediaQuery.matches) {
      mark = ` <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel" data-pause="hover">
      <ol class="carousel-indicators nuts-indi">
        <li data-target="#carouselExampleControls" data-slide-to="0"></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        <li data-target="#carouselExampleControls" data-slide-to="3"></li>
        <li data-target="#carouselExampleControls" data-slide-to="4"></li>
        <li data-target="#carouselExampleControls" data-slide-to="5"></li>
      </ol>
  
  
      <div class="carousel-inner">
  
  
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="images/walnut.jpg" alt="Ceviz">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Ceviz</h3>
                      <p class="card-text">
                         İçerdiği yüksek lif sayesinde sindirim sisteminin düzenli çalışmasını sağlar. Bağırsakları temizler. Kabızlık sorununu giderir. Kemik ve diş yapısının güçlenmesini sağlar. Akciğer hastalıklarına karşı savunma mekanizması oluşturur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
  
        <div class="carousel-item ">
          <div class="container">
            <div class="row">
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <img src="images/hazelnut.jpg" alt="Fındık">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Fındık</h3>
                      <p class="card-text"> Kanser düşmanıdır. Bağışıklığı kuvvetlendirir. Kalp ve damar dostudur. Diyabet riskini azaltır. Beyin sağlığını korur. Yaşlanmayı geciktirir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
       <div class="carousel-item ">
        <div class="container">
          <div class="row">
            <div class="col col-card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                  <img src="images/honey.jpg" alt="Bal">
                  </div>
                  <div class="flip-card-back">
                    <h3 class="card-heading">Bal</h3>
                    <p class="card-text">
                     Yüksek kolesterol seviyesini düzenler, kontrol altına alır ve iyi kolesterol seviyelerini arttırır.Bağışıklık sistemini güçlendirir.İshal olma durumunda şiddetinin ve süresini kısaltır.Mide komplikasyonlarını organik olarak tedavi eder.Beyni güçlendirir, konsantrasyonu arttırır.Geleneksel ilaçlarda doğal bir antiseptik olarak kullanılır.                  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       
  
       <div class="carousel-item ">
        <div class="container">
          <div class="row">
            <div class="col col-card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                  <img src="images/Carob-Mollasas.jpg" alt="Keçiboynuzu Pekmezi">
                  </div>
                  <div class="flip-card-back">
                    <h3 class="card-heading">Keçiboynuzu Pekmezi</h3>
                    <p class="card-text">
                    Yüksek kolesterol seviyesini düzenler, kontrol altına alır ve iyi kolesterol seviyelerini arttırır. Kanı temizler ve damar tıkanıklıklarının giderilmesine yardımcı olur. Şiddetli öksürüklere karşı çok etkilidir. Bağırsak ve sindirim sistemine olumlu katkıları vardır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       
  
  
       <div class="carousel-item ">
        <div class="container">
          <div class="row">
            <div class="col col-card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                  <img src="images/butter.jpg" alt="Tereyağı">
                  </div>
                  <div class="flip-card-back">
                    <h3 class="card-heading">Tereyağı</h3>
                    <p class="card-text">
                    Antioksidan içerdiği için vücuttan toksinlerin atılmasını sağlar.
                    Bağışıklık sistemini güçlendirir.
                    Kanser hücrelerinin dağılmasını engeller.
                    Kemik sağlığı korunumuna yardım eder ve kireçlenmeyi önler.
                    Beyin sağlığını korur.
                     Göz sağlığına iyi gelir. Aynı zamanda oluşabilecek hastalıkları engeller.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       
       <div class="carousel-item ">
        <div class="container">
          <div class="row">
            <div class="col col-card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                  <img src="images/datca-paste.jpg" alt="Datça Macunu">
                  </div>
                  <div class="flip-card-back">
                    <h3 class="card-heading">Datça Macunu</h3>
                    <p class="card-text">
                     Boğazda biriken balgamı sökmede etkili olan karışım yemek borusu kanseri gibi ciddi durumları
                    engeller. Datça macunu vücuttaki alerjik hücrelerin sayısını azaltarak vücudun reaksiyonunu önler. Vücuttaki hücreleri yenileyerek cildi onarır. Yaşlanma ve kırışma gibi sağlık sorunlarının riskini azaltır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`;
      clearHtml();
      document
        .querySelector("#intro-nuts")
        .insertAdjacentHTML("afterbegin", mark);
    } else {
      mark = `<div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel" data-pause="hover">
      <ol class="carousel-indicators nuts-indi">
        <li data-target="#carouselExampleControls" data-slide-to="0" class="active">
        <li data-target="#carouselExampleControls" data-slide-to="1">
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="images/walnut.jpg" alt="Ceviz">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Ceviz</h3>
                      <p class="card-text">
                        İçerdiği yüksek lif sayesinde sindirim sisteminin düzenli çalışmasını sağlar.
                        Bağırsakları temizler.
                        Kabızlık sorununu giderir.
                        Kemik ve diş yapısının güçlenmesini sağlar.
                        Akciğer hastalıklarına karşı savunma mekanizması oluşturur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
  
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="images/hazelnut.jpg" alt="Fındık">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Fındık</h3>
                      <p class="card-text">
                         Kanser düşmanıdır. Bağışıklığı kuvvetlendirir. Kalp ve damar dostudur. Diyabet riskini azaltır. Beyin sağlığını korur. Yaşlanmayı geciktirir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
  
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="images/honey.jpg" alt="Bal">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Bal</h3>
                      <p class="card-text">
                         Yüksek kolesterol seviyesini düzenler, kontrol altına alır ve iyi kolesterol seviyelerini
                          arttırır. Bağışıklık sistemini güçlendirir. İshal olma durumunda şiddetinin ve süresini kısaltır. Mide komplikasyonlarını organik olarak tedavi eder. Beyni güçlendirir, konsantrasyonu arttırır. Geleneksel ilaçlarda doğal bir antiseptik olarak kullanılır.                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="images/Carob-Mollasas.jpg" alt="Keçiboynuzu Pekmezi">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Keçiboynuzu Pekmezi</h3>
                      <p class="card-text">
                        Kanı temizler ve damar tıkanıklıklarının giderilmesine yardımcı olur. Şiddetli öksürüklere karşı çok etkilidir. Bağırsak ve sindirim sistemine olumlu katkıları vardır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
  
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="images/butter.jpg" alt="Tereyağı">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Tereyağı</h3>
                      <p class="card-text">
                         Antioksidan içerdiği için vücuttan toksinlerin atılmasını sağlar. Bağışıklık sistemini güçlendirir. Kanser hücrelerinin dağılmasını engeller. Kemik sağlığı korunumuna yardım eder ve kireçlenmeyi önler. Beyin sağlığını korur. Göz sağlığına iyi gelir. Aynı zamanda oluşabilecek hastalıkları engeller.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
  
              <div class="col col-card">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="images/datca-paste.jpg" alt="Datça Macunu">
                    </div>
                    <div class="flip-card-back">
                      <h3 class="card-heading">Datça Macunu</h3>
                      <p class="card-text">
                         Boğazda biriken balgamı sökmede etkili olan karışım yemek borusu kanseri gibi ciddi durumları engeller. Datça macunu vücuttaki alerjik hücrelerin sayısını azaltarak vücudun reaksiyonunu önler. Vücuttaki hücreleri yenileyerek cildi onarır. Yaşlanma ve kırışma gibi sağlık sorunlarının riskini azaltır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`;
      clearHtml();
      document
        .querySelector("#intro-nuts")
        .insertAdjacentHTML("afterbegin", mark);
    }
  };
  var mediaQuery = window.matchMedia("(max-width: 1200px)");
  nuts(mediaQuery);
  mediaQuery.addListener(nuts);