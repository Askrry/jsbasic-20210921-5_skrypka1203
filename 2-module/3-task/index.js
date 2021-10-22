let calculator = {

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read(a, b) {
    this.a = a;
    this.b = b;
  }

};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
