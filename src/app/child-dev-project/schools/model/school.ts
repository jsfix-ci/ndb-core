import { Entity } from '../../../core/entity/entity';
import { DatabaseEntity } from '../../../core/entity/database-entity.decorator';
import { DatabaseField } from '../../../core/entity/database-field.decorator';

@DatabaseEntity('School')
export class School extends Entity {
  @DatabaseField() name: string = '';
  @DatabaseField() address: string = '';
  @DatabaseField() medium: string = '';
  @DatabaseField() remarks: string = '';
  @DatabaseField() website: string = '';
  @DatabaseField() privateSchool: boolean;
  @DatabaseField() phone: string = '';
  @DatabaseField() upToClass: number;
  @DatabaseField() academicBoard: string = '';
  @DatabaseField() timing: string = '';
  @DatabaseField() workingDays: string = '';

  public toString() {
    return this.name;
  }
}
