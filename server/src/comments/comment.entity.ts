import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Issue } from '../issues/issue.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  details: string;

  @Column({ type: 'integer' })
  commentor_id: number;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'commentor_id' })
  commentor: User;

  @Column({ type: 'integer' })
  issue_id: number;

  @ManyToOne(() => Issue, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'issue_id' })
  issue: Issue;

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  created_at: Date;
}
