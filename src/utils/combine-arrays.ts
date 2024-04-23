/**
 * дженерик T - функция работает с интерфейсом Item с неизвестным числом ключей
 */
interface Button {
  title: string;
  id: string;
}
interface CombinedItem<T> {
  id: string;
  items: T[];
}
export default function combineArrays<T extends Record<string, any>> (arr1: T[], arr2: Button[]): CombinedItem<T>[] {
  const map: Record<string, T[]> = {}

  // Создаем пустые массивы для каждого id
  arr2.forEach((item) => {
    map[item.id] = []
  })

  // Добавляем элементы в соответствующие массивы в объекте map
  arr1.forEach((item) => {
    if (arr2.some(button => button.id === 'all')) {
      map.all.push(item)
    }
    if (map[item.type]) {
      map[item.type].push(item)
    }
  })

  const result: CombinedItem<T>[] = Object.keys(map).map(key => ({
    id: key,
    items: map[key]
  }))

  return result
}
