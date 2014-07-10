package ngpanwei.backlog;

import java.util.List;

public interface IBacklogService {

	public abstract Task add(String taskName);

	public abstract Task getTask(String taskName);

	public abstract Task setTaskStatus(String taskName, String status);

	public abstract List<Task> getUnompleteTask();

}