import { Path } from 'shared/enums'
import { BaseService } from './base'
import { Ticket } from 'entities/ticket'

export class TicketsService extends BaseService {
  public static async getAllTickets() {
    const { data } = await this.fetch<Ticket[]>({
      url: Path.TICKETS,
    })

    return data
  }

  public static async delete(id: string) {
    const { data } = await this.fetch<Ticket>({
      url: `${Path.TICKETS}/${id}`,
      method: 'DELETE',
    })

    return data
  }
}
