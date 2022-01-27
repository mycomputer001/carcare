/**
 * อินเตอร์เฟสเกี่ยวกับการจองเพื่อล้างรถ
 */
export interface ReserveBody {
  /**
   * รถยี่ห้ออะไร
   */
  brand: string
  model: string
  license: string
  phone: string
  service: string
  date: string
}
