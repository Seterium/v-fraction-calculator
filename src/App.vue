<script>
export default {
  name: 'App',
  data: () => ({
    fractions: [
      {
        numerator: 1,
        denominator: 2
      },
      {
        numerator: 3,
        denominator: 4
      }
    ]
  }),
  computed: {
    // Сумма числителей (с учетом приведения дробей к единому знаменателю)
    numeratorResult() {
      return this.fractions.reduce((result, { numerator, denominator}) => result += numerator * (this.denominatorsLCM / denominator), 0)
    },

    // Наименьшее общее кратное знаменателей (необходимо для приведения дробей к единому знаменателю)
    denominatorsLCM() {
      return this.lcm(this.fractions.map(({ denominator }) => denominator))
    },

    // Целая часть суммы дробей
    reducedInteger() {
      return (this.numeratorResult - this.numeratorResult % this.denominatorsLCM) / this.denominatorsLCM
    },

    // Дробная часть суммы дробей
    reducedFraction() {
      const gcd = this.gcd(this.numeratorResult, this.denominatorsLCM)

      return {
        numerator: (this.numeratorResult % this.denominatorsLCM) / gcd,
        denominator: this.denominatorsLCM / gcd
      }
    }
  },
  methods: {
    // Вычисление наименьшего общего кратного массива чисел
    lcm(numbers) {
      return numbers.reduce((x, y) => this.scm(x, y))
    },

    // Вычисление наименьшего общего кратного для двух чисел
    scm(x, y) {
      return (x * y) / this.gcd(x, y)
    },

    // Вычисление наибольшего общего делителя для двух чисел
    gcd(x, y) {
      return (x % y === 0) ? y : this.gcd(y, x % y)
    },

    // Добавление новой дроби
    addMoreFractions() {
      this.fractions.push({
        numerator: 1,
        denominator: 1
      })
    },

    // Удаление дроби
    removeFraction(index) {
      this.fractions.splice(index, 1)
    },

    // Обработка ввода значений дробей
    handleInput(value, index, field) {
      if (value % 1 !== 0) {
        this.fractions[index][field] = Math.round(value)
      }

      if (value < 1) {
        this.fractions[index][field] = 1
      } else if (value > 99) {
        this.fractions[index][field] = 99
      }
    }
  }
}
</script>
<template>
  <div class="app">
    <div class="app__fractions-wrap">
      <div class="app__fractions">
        <div 
          v-for="(fraction, index) in fractions"
          :key="index"
          class="app__fraction"
        >
          <input 
            v-model.number="fraction.numerator"
            type="number"
            @change="handleInput(fraction.numerator, index, 'numerator')"
          >
          <hr>
          <input 
            v-model.number="fraction.denominator"
            type="number"
            @change="handleInput(fraction.denominator, index, 'denominator')"
          >
          <div class="app__fraction-remove-wrap">
            <button 
              v-if="fractions.length > 2"
              @click="removeFraction(index)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="app__result">
        <div class="app__result-fraction">
          <div class="app__result-value">
            {{ numeratorResult }}
          </div>
          <hr>
          <div class="app__result-value">
            {{ denominatorsLCM }}
          </div>
        </div>
        <div 
          v-if="numeratorResult >= denominatorsLCM"
          class="app__result-reduced"
        >
          <div class="app__result-reduced-integer">
            {{ reducedInteger }}
          </div>
          <div 
            v-if="numeratorResult % denominatorsLCM"
            class="app__result-reduced-fraction"
          >
            <div class="app__result-value">
              {{ reducedFraction.numerator }}
            </div>
            <hr>
            <div class="app__result-value">
              {{ reducedFraction.denominator }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <button 
      class="app__add-more"
      :disabled="fractions.length === 5"
      @click="addMoreFractions"
    >
      Add more fractions
    </button>
  </div>
</template>
