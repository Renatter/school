<template>
  <div class="bg h-[100vh]">
    <div class="container text-white">
      <div class="pt-[155px] font-bold flex justify-between">
        <div>
          <h1 class="text-[90px] font-black text-[#a69781]">
            Бізбен бірге <br />
            білім әлемін аш!
          </h1>
          <p class="text-[#a69781] text-[30px]">
            Ыбырай Алтынсарин атындағы жалпы орта білім <br />
            беретін мектеп
          </p>
          <p
            id="animated-text"
            class="text-[#FCB33C] pt-[30px] text-[20px] animate bounce"
          >
            Мен "Ыбырай Алтынсарин" мектебiн қалаймын →
          </p>
        </div>
        <div>
          <img class="w-[300px]" src="../assets/BG.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#F5F5F3]">
    <div class="container">
      <div class="h-[100vh] pt-[75px]">
        <h1 class="text-[30px] text-[#4F4849] x">
          Ыбырай Алтынсарин атындағы жалпы орта білім беретін мектеп
        </h1>
        <div class="flex pt-[155px]">
          <img
            src="https://qazaq1913.com/wp-content/uploads/2021/02/2020_11_05_whatsapp-image-2020-11-02-at-14.02.53.jpeg"
            alt=""
            class="rounded-[35px] w-[700px]"
          />
          <div class="font-200 ml-[25px] text-[17px] text-[#4F4849]">
            <p>
              Құрметті Достар! Біз сізді әр оқушының өз әлеуетін ашуға,
              дағдылары мен білімін дамытуға, сондай-ақ табысқа жетудің бірегей
              жолын табуға мүмкіндігі бар білім беру оқу ортасында қарсы алуға
              қуаныштымыз. Біздің мұғалімдеріміз-оқушыларымыз үшін ынталандырушы
              және қолдаушы жағдай жасауға ұмтылатын тәжірибелі және адал
              мамандар. <br />
            </p>
            <p class="pt-[15px]">
              Біз әр балаға өз таланттарын ашуға және жеке мақсаттарына жетуге
              мүмкіндік беретін жеке көзқарасқа сенеміз. "Ыбырай Алтынсарин"
              мектебi біз тек академиялық жетістіктерді ғана емес,
              оқушыларымыздың жан-жақты дамуын да бағалаймыз. Біз оқушыларымыз
              көкжиектерін кеңейтіп, жаңа дағдыларға ие болуы үшін сабақтан тыс
              іс-шараларға, спорттық жарыстарға, шығармашылық байқауларға және
              экскурсияларға қатысуға шақырамыз.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white as">
    <div class="container">
      <div class="h-[100vh] pt-[75px]">
        <h1 class="text-[30px] text-[#4F4849] font-black">
          Оқушыларға, ата-аналарға және мұғалімдерге пайдасы
        </h1>
        <div class="flex pt-[105px] justify-between">
          <div
            class="w-[700px] border p-[15px] rounded-[25px] text-[20px] bg-[#F5F5F3]"
          >
            <p v-if="student">
              Оқушыларға: <br />
              <span class="text-[#a69781] font-bold"> Сапалы білім:</span>
              біз студенттерге академиялық дағдыларды дамытуға және оқу пәндері
              туралы терең түсінік алуға көмектесетін заманауи әдістер мен
              бағдарламаларға негізделген сапалы білім береміз. Жеке көзқарас:
              біз әр оқушының бірегейлігін бағалаймыз және олардың оқу және жеке
              дамуына жеке қолдау мен көмек көрсетуге тырысамыз. Біздің
              мұғалімдер мен тәрбиешілер әр оқушыға өз мақсаттарына жетуге
              көмектесуге дайын. <br />
              <span class="text-[#a69781] font-bold">
                Әр түрлі сабақтан тыс мүмкіндіктер:</span
              >
              біз студенттердің қызығушылықтары мен таланттарын дамыту үшін әр
              түрлі сабақтан тыс іс-шараларды, спорт клубтарын, өнер
              үйірмелерін, ғылыми жобаларды және басқа да әрекеттерді ұсынамыз.
              <br />
              <span class="text-[#a69781] font-bold"> Болашаққа дайындық:</span>
              біздің мектеп оқушыларды қазіргі әлемде сәтті бейімделуге
              дайындауға тырысады. Біз болашақ мансап пен өмірде пайдалы болатын
              сыни ойлау, қарым-қатынас, ынтымақтастық және проблемалық шешім
              дағдыларын дамытуға баса назар аударамыз.
            </p>
            <p v-if="teacher">
              Мұғалімдерге <br />

              <span class="text-[#a69781] font-bold"> Кәсіби даму:</span>

              біз мұғалімдерімізді бағалаймыз және оларға кәсіби даму, оқыту
              және тәжірибе алмасу мүмкіндіктерін ұсынамыз. Біз мұғалімдерді
              педагог ретінде олардың тұрақты дамуы мен өсуінде қолдаймыз.
              <br />
              <span class="text-[#a69781] font-bold"
                >Ресурстар мен материалдар:
              </span>
              біз мұғалімдерге сабақтарды дайындауға және оқу процесінің
              әртүрлілігіне көмектесетін әртүрлі оқу материалдарына,
              нұсқаулықтар мен құралдарға қол жеткізуге мүмкіндік береміз.
              <br />
              <span class="text-[#a69781] font-bold"
                >Ынтымақтастық және тәжірибе алмасу:
              </span>
              біз мұғалімдер арасындағы ынтымақтастық пен тәжірибе алмасуды
              ынталандырамыз. Біз мұғалімдер ең жақсы тәжірибелермен бөлісіп,
              бір-біріне қолдау көрсете алатындай алқалық кеңестер,
              педагогикалық үйірмелер мен оқыту семинарларын ұйымдастырамыз.
            </p>
            <p v-if="parents">
              Ата-аналарға <br />
              <span class="text-[#a69781] font-bold">
                Отбасымен серіктестік:</span
              >

              біз ата-аналармен серіктестікті бағалаймыз және оларды білім беру
              процесіне белсенді қатысуға шақырамыз. Біз мектеп пен отбасы
              арасындағы ашық және тиімді қарым-қатынасты қамтамасыз ету үшін
              ата-аналар жиналыстарын, консультацияларды және ата-аналар
              комитеттерін ұйымдастырамыз. <br />
              <span class="text-[#a69781] font-bold">Ақпараттандыру:</span> біз
              ата-аналарға мектептегі іс-шаралар, академиялық жетістіктер мен
              жаңалықтар туралы өзекті ақпарат береміз. Ата-аналар балаларының
              жетістіктері туралы хабардар бола алады және мектеп өміріне қатыса
              алады. <br />
              <span class="text-[#a69781] font-bold">
                Ресурстар және қолдау:
              </span>
              Біз ата-аналарға балаларының білімі мен дамуын қолдауға
              көмектесетін әртүрлі ресурстарға, ақпаратқа және материалдарға қол
              жеткізуді ұсынамыз. Егер сұрақтар немесе қиындықтар туындаса, біз
              ата-аналарға кеңес пен қолдау көрсетеміз.
            </p>
            <p v-if="parents == false && teacher == false && student == false">
              Оқушыларға: <br />
              <span class="text-[#a69781] font-bold"> Сапалы білім:</span>
              біз студенттерге академиялық дағдыларды дамытуға және оқу пәндері
              туралы терең түсінік алуға көмектесетін заманауи әдістер мен
              бағдарламаларға негізделген сапалы білім береміз. Жеке көзқарас:
              біз әр оқушының бірегейлігін бағалаймыз және олардың оқу және жеке
              дамуына жеке қолдау мен көмек көрсетуге тырысамыз. Біздің
              мұғалімдер мен тәрбиешілер әр оқушыға өз мақсаттарына жетуге
              көмектесуге дайын. <br />
              <span class="text-[#a69781] font-bold">
                Әр түрлі сабақтан тыс мүмкіндіктер:</span
              >
              біз студенттердің қызығушылықтары мен таланттарын дамыту үшін әр
              түрлі сабақтан тыс іс-шараларды, спорт клубтарын, өнер
              үйірмелерін, ғылыми жобаларды және басқа да әрекеттерді ұсынамыз.
              <br />
              <span class="text-[#a69781] font-bold"> Болашаққа дайындық:</span>
              біздің мектеп оқушыларды қазіргі әлемде сәтті бейімделуге
              дайындауға тырысады. Біз болашақ мансап пен өмірде пайдалы болатын
              сыни ойлау, қарым-қатынас, ынтымақтастық және проблемалық шешім
              дағдыларын дамытуға баса назар аударамыз.
            </p>
          </div>

          <div>
            <div
              @mouseover="showText('student')"
              @mouseout="hideText"
              class="card text-[#4F4849] border 1px flex items-center p-[15px] rounded-[10px] bg-[#F5F5F3] h-[120px]"
            >
              <img
                src="https://cdn.onlinewebfonts.com/svg/download_146663.png"
                class="w-[70px]"
                alt=""
              />
              <p class="text-[30px] ml-[15px]">Оқушыларға</p>
            </div>
            <div
              @mouseover="showText('parents')"
              @mouseout="hideText"
              class="mt-[15px] card text-[#4F4849] border 1px flex items-center p-[15px] rounded-[10px] bg-[#F5F5F3] h-[120px]"
            >
              <img
                src="https://www.svgrepo.com/show/24067/three-women-two-adults-and-a-child.svg"
                class="w-[70px]"
                alt=""
              />
              <p class="text-[30px] ml-[15px]">Ата-аналарға</p>
            </div>
            <div
              @mouseover="showText('teacher')"
              @mouseout="hideText"
              class="mt-[15px] card text-[#4F4849] border 1px flex items-center p-[15px] rounded-[10px] bg-[#F5F5F3] h-[120px]"
            >
              <img
                src="https://www.svgrepo.com/show/82098/female-teacher.svg"
                class="w-[70px]"
                alt=""
              />
              <p class="text-[30px] ml-[15px]">Мұғалімдерге</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-[25px] h-[100vh] bg-[#EFEDEB]">
    <div class="container pt-[200px]">
      <div class="flex justify-between">
        <NumberCard name="ОҚУШЫЛАР" :number="480" />
        <!-- Компонент NumberCard, отображающий информацию о количестве учащихся -->
        <NumberCard name="МҰГАЛІМДЕР" :number="9" />
        <!-- Компонент NumberCard, отображающий информацию о количестве учителей -->
        <NumberCard name="ҮЗДІК ОҚУШЫЛАР" :number="45" />
        <!-- Компонент NumberCard, отображающий информацию о количестве высокоуспешных учащихся -->
      </div>
    </div>
  </div>
  <News class="container py-[25px] h-[100vh]" />
  <!-- Компонент News, отображающий новости -->

  <div class="bg-[#EFEDEB]">
    <Teacher class="container py-[25px] h-[100vh]" />
    <!-- Компонент Teacher, отображающий информацию о преподавателях -->
  </div>

  <div class="bg-white">
    <Progress class="container py-[25px] h-[100vh]" />
    <!-- Компонент Progress, отображающий прогресс -->
  </div>
</template>

<script>
import News from "./News.vue"; // Импорт компонента News
import Teacher from "./Teacher.vue"; // Импорт компонента Teacher
import Progress from "./Progress.vue"; // Импорт компонента Progress
import NumberCard from "../components/NumberCard.vue";
export default {
  components: {
    News,
    Teacher,
    Progress,
    NumberCard,
  },
  data() {
    return {
      student: true, // Переменная для отображения информации об учащихся
      teacher: false, // Переменная для отображения информации о преподавателях
      parents: false, // Переменная для отображения информации о родителях
    };
  },
  methods: {
    showText(target) {
      this.student = target === "student"; // Отображение информации об учащихся
      this.teacher = target === "teacher"; // Отображение информации о преподавателях
      this.parents = target === "parents"; // Отображение информации о родителях
    },
    hideText() {
      this.student = false; // Скрытие информации об учащихся
      this.teacher = false; // Скрытие информации о преподавателях
      this.parents = false; // Скрытие информации о родителях
    },
  },
};
</script>

<style>
.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* Add styles for the background video container */

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0);
  }
}
.bg-clip {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
#animated-text {
  cursor: pointer;
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.bg {
  background-color: #efedeb;
}
.card:hover {
  background: #a69781;
  transition: 0.5s;
  color: aliceblue;
  cursor: pointer;
}
</style>
