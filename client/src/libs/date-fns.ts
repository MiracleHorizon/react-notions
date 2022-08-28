import { formatRelative } from 'date-fns'

export default class DateFns {
  static setDateByFormatRelative(baseDate: string): string {
    return formatRelative(new Date(baseDate), new Date())
  }
}
