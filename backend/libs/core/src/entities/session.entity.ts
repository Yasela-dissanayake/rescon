import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { SessionItemEntity } from './session-item.entity';
import { UserEntity } from './user.entity';

@Entity('sessions')
export class SessionEntity extends BaseEntity {
  @Column({ type: 'time', name: 'start_time' })
  startTime: string;

  @Column({ type: 'time', name: 'end_time' })
  endTime: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ name: 'session_id', unique: true })
  sessionId: string;

  @ManyToMany(
    () => UserEntity,
    (entity: UserEntity) => entity.chairingSessions,
    { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' },
  )
  @JoinTable({
    name: 'session_chairs',
    joinColumn: { name: 'session_id', referencedColumnName: 'sessionId' },
    inverseJoinColumn: { name: 'session_chair_id', referencedColumnName: 'id' },
  })
  sessionChairs: UserEntity[];

  @Column('simple-array', { name: 'session_chair_ids', nullable: true })
  sessionChairIds: string[];

  @Column('simple-array', { name: 'session_item_ids', nullable: true })
  sessionItemIds: string[];

  @OneToMany(
    () => SessionItemEntity,
    (entity: SessionItemEntity) => entity.session,
  )
  sessionItems: SessionItemEntity[];

  @Column()
  category: string;

  @Column()
  location: string;
}
