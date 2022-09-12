import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type CoverDocument = Cover & Document

@Schema()
export class Cover {
  @Prop()
  imgUrl: string

  @Prop()
  tooltipTitle: string

  @Prop()
  tooltipDescription: string
}

export const CoverSchema = SchemaFactory.createForClass(Cover)
