import { generateStarArray } from '../utils/generateStarArray';

describe('Функция generateStarArray:', () => {
  it('Правильно округляет рейтинг?', () => {
    expect(generateStarArray(3.5)).toEqual([1, 1, 1, 1, 0]);
    expect(generateStarArray(4)).toEqual([1, 1, 1, 1, 0]);
    expect(generateStarArray(1.2)).toEqual([1, 0, 0, 0, 0]);
    expect(generateStarArray(0)).toEqual([0, 0, 0, 0, 0]);
    expect(generateStarArray(5)).toEqual([1, 1, 1, 1, 1]);
  });

  it('Возвращает массив из 5 элементов?', () => {
    const stars = generateStarArray(3);
    expect(stars).toHaveLength(5);
  });

  it('Обрабатывает крайние случаи?', () => {
    expect(generateStarArray(4.9)).toEqual([1, 1, 1, 1, 1]);
    expect(generateStarArray(1.5)).toEqual([1, 1, 0, 0, 0]);
    expect(generateStarArray(2)).toEqual([1, 1, 0, 0, 0]);
    expect(generateStarArray(0.5)).toEqual([1, 0, 0, 0, 0]);
  });

  it('Обрабатывает отрицательный рейтинг?', () => {
    expect(generateStarArray(-1)).toEqual([0, 0, 0, 0, 0]);
    expect(generateStarArray(-3.5)).toEqual([0, 0, 0, 0, 0]);
  });

  it('Правильно вычисляет кол-во звезд?', () => {
    const stars = generateStarArray(3.8);
    expect(stars).toEqual([1, 1, 1, 1, 0]);
  });
});
