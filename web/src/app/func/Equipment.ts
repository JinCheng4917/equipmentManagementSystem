/**
 * 设备实体
 */
export class Equipment {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  /** 类型 */
  type: number;

  /** 型号 */
  model: string;

  /** 内部编号 */
  internalNumber: string;

  constructor(data?: { id?: number, name?: string, type?: number, model?: string,  internalNumber?: string}) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.name) {
        this.name = data.name;
      }

      if (data.type) {
        this.type = data.type;
      }

      if (data.model) {
        this.model = data.model;
      }

      if (data.internalNumber) {
        this.internalNumber = data.internalNumber;
      }
    }

  }
}
