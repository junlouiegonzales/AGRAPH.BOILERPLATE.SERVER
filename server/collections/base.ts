import { prop } from '@typegoose/typegoose';
import { Date } from 'mongoose';

export class BaseEntity {
  @prop({ required: true })
  public createdAt!: Date;

  @prop({ required: true })
  public createdByName!: string;

  @prop({ required: true })
  public createdById!: string;

  @prop()
  public updatedAt: Date;

  @prop()
  public updatedByName: string;

  @prop()
  public updatedById: string;
}
