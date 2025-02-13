import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionItemDto {
  @ApiProperty({ nullable: true })
  startTime: string;

  @ApiProperty({ nullable: true })
  endTime: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  presenter: string;

  @ApiProperty({ required: true })
  abstractId: number;

  @ApiProperty({ nullable: true })
  sessionId: string;
}

export class UpdateSessionItemDto {
  @ApiProperty({ nullable: true })
  startTime: string;

  @ApiProperty({ nullable: true })
  endTime: string;

  @ApiProperty({ nullable: true })
  title: string;
  
  @ApiProperty({ nullable: true })
  presenter: string;

  @ApiProperty({ nullable: true })
  abstractId: number;

  @ApiProperty({ nullable: true })
  sessionId: string;
}
