// interfaces
import IHabit from "../../entity/IHabit.entity";

export default interface IHabitRepository {
    isHabitExisist(habitName: string, userId: string): Promise<IHabit | null | never>;
    saveNewHabit(habitName: string, description: string, userId: string): Promise<IHabit | never>;
}