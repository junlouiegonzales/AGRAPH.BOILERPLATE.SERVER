import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { BaseEntity } from './base';

@modelOptions({ schemaOptions: { collection: 'users' } })
class User extends BaseEntity {
  @prop({ required: true })
  public firstName!: string;

  @prop({ required: true })
  public lastName!: number;
}

export default getModelForClass(User);
