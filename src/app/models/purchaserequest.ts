export class PurchaseRequest {

  Id: number;
  UserId: number;
  Description: string;
  Justification: string;
  RejectionReason: string;
  DeliveryMode: string;
  Status: string;
  Total: string;
  Active: boolean;
  DateCreated: string;

  constructor(
    Id: number,
    UserId: number,
    Description: string,
    Justification: string,
    RejectionReason: string,
    DeliveryMode: string,
    Status: string,
    Total: string,
    Active: boolean
  ) {
    this.Id = Id;
    this.UserId = UserId;
    this.Description = Description;
    this.Justification = Justification;
    this.RejectionReason = RejectionReason;
    this.DeliveryMode = DeliveryMode;
    this.Status = Status;
    this.Total = Total;
    this.Active = Active;
  }
}