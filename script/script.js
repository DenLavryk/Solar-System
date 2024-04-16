var spaceSlider = new Swiper('.space-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

let arrLang = {
  'en':{
    'text-center': 'Planets of the solar system',
    'planetEarth': 'Earth',
    'planet-descriptionEarth': 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.Earth belongs to the terrestrial planets and is the largest of these planets in the solar system. The earth is sometimes called the world.',
    'planetJupiter': 'Jupiter',
    'planet-descriptionJupiter': 'Jupiter is the fifth planet from the Sun and the largest in the Solar System.It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined. And Jupiter was the first planet to form.',
    'planetMars': 'Mars',
    'planet-descriptionMars': "Mars is the fourth planet and the furthest terrestrial planet from the Sun.The reddish color of its surface is due to finely grained dust in the soil, giving it the nickname 'the Red Planet'.Mars's radius is second smallest among the planets inthe Solar System.",
    'planetMercury': 'Mercury',
    'planet-descriptionMercury': 'Mercury is the first planet from the Sun and the smallest in the Solar System. It is a terrestrial planet with a heavily cratered surface due to overlapping impact events. Despite being the smallest planet in the Solar System, Mercury is dense enough to have roughly the same surface gravity as Mars.',
    'planetNeptune': 'Neptune',
    'planet-descriptionNeptune': 'Neptune is the eighth and farthest planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.',
    'planetSaturn': 'Saturn',
    'planet-descriptionSaturn': 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth.It has only one-eighth the average density of Earth, but is over 95 times more massive.',
    'planetUranus': 'Uranus',
    'planet-descriptionUranus': 'Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called "ice" or volatiles.',
    'planetVenus': 'Venus',
    'planet-descriptionVenus': "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth.It is the third brightest object in Earth's sky after the Moon and the Sun.",
    'planetPluto': 'Pluto',
    'planet-descriptionPluto': 'Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun.Pluto is made primarily of ice and rock and is much smaller than the inner planets.',
  },

  'uk':{
    'text-center': 'Планети сонячної системи',
    'planetEarth': 'Земля',
    'planet-descriptionEarth': 'Земля — це третя планета від Сонця та єдиний відомий астрономічний об’єкт, на якому є життя. Земля належить до планет земної групи та є найбільшою з цих планет у Сонячній системі. Землю іноді називають світом.',
    'planetJupiter': 'Юпітер',
    'planet-descriptionJupiter': 'Юпітер — п’ята планета від Сонця і найбільша в Сонячній системі. Це газовий гігант, маса якого в два з половиною рази перевищує масу всіх інших планет Сонячної системи разом узятих. А Юпітер був першою планетою, що утворилася.',
    'planetMars': 'Марс',
    'planet-descriptionMars': "Марс є четвертою планетою та найвіддаленішою від Сонця планетою земної групи. Червонуватий колір його поверхні зумовлений дрібнозернистим пилом у ґрунті, що дало йому прізвисько «Червона планета». Радіус Марса є другим найменшим серед планет Сонячної системи.",
    'planetMercury': 'Меркурій',
    'planet-descriptionMercury': 'Меркурій — перша від Сонця планета і найменша в Сонячній системі. Це планета земної групи з великою кількістю кратерів на поверхні через накладення ударів. Незважаючи на те, що Меркурій є найменшою планетою в Сонячній системі, він досить щільний, щоб мати приблизно таку ж поверхневу гравітацію, як Марс.',
    'planetNeptune': 'Нептун',
    'planet-descriptionNeptune': 'Нептун - восьма і найдальша від Сонця планета. Це четверта за розміром планета в Сонячній системі за діаметром, третя за масою і найщільніша планета-гігант. Це в 17 разів більше маси Землі. Нептун щільніший і фізично менший за Уран, оскільки його більша маса спричиняє більше гравітаційного стиснення його атмосфери.',
    'planetSaturn': 'Сатурн',
    'planet-descriptionSaturn': 'Сатурн — шоста планета від Сонця і друга за величиною в Сонячній системі після Юпітера. Це газовий гігант із середнім радіусом приблизно в дев’ять з половиною разів більшим за земний. Його щільність становить лише одну восьму від середньої щільності Землі, але він у понад 95 разів масивніший.',
    'planetUranus': 'Уран',
    'planet-descriptionUranus': 'Уран — сьома планета від Сонця. Це газоподібний крижаний гігант блакитного кольору. Більша частина планети складається з води, аміаку та метану в надкритичній фазі речовини, яку в астрономії називають «льодом» або летючими речовинами.',
    'planetVenus': 'Венера',
    'planet-descriptionVenus': "Венера - друга планета від Сонця. Це кам’яниста планета з найщільнішою атмосферою серед усіх кам’янистих тіл у Сонячній системі та єдина, маса та розміри якої близькі до орбітального сусіда Землі. Це третій за яскравістю об’єкт на земному небі після Місяця і Сонця.",
    'planetPluto': 'Плутон',
    'planet-descriptionPluto': 'Плутон — карликова планета в поясі Койпера, кільці тіл за орбітою Нептуна. Це дев’ятий за розміром і десятий за масою відомий об’єкт, який обертається навколо Сонця. Плутон складається в основному з льоду та каміння та набагато менший за внутрішні планети.',
  }
}

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr("id");

    $('.lang').each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});