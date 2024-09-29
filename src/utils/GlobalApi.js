import axios from "axios";
import { toast } from "sonner";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

// !Auth API
//login api
export const login = async (postData) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", postData);
    if (data.status) {
      toast.success(data.message);
      localStorage.setItem("access_token", data.data);
    } else {
      toast.error(data.error);
    }
    return data.status;
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.errors);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//get user
export const getUser = async (email) => {
  try {
    const { data } = await AxiosInstance.get(`/auth/user/${email}`);
    return data?.data;
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//update user profile
export const updateProfile = async (id, updateData) => {
  try {
    const { data } = await AxiosInstance.put(`/user/${id}`, updateData);

    if (data.status) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    return data;
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//change-password
export const changePassword = async (postData) => {
  try {
    const { data } = await AxiosInstance.patch(
      `/user/change-password`,
      postData
    );
    if (data.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

// !Task API
//get all tasks
export const getAllTasks = async () => {
  try {
    const { data } = await AxiosInstance.get("/task/trashed-tasks/false");
    if (data.status) {
      return data.data;
    } else {
      toast.error(data.message);
      return null;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//get task by stage
export const getTaskByStage = async (stage) => {
  try {
    const { data } = await AxiosInstance.get(`/task/staged-tasks/${stage}`);
    if (data.status) {
      return data.data;
    } else {
      toast.error(data.message);
      return null;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//create task
export const createTask = async (postData) => {
  try {
    const { data } = await AxiosInstance.post("/task", postData);
    if (data.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//get task details
export const getTaskDetail = async (id) => {
  try {
    const { data } = await AxiosInstance.get(`/task/${id}`);
    if (!data.status) {
      toast.error(task.message);
      return null;
    }
    return data?.data;
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//edit task
export const editTask = async (id, updateData) => {
  try {
    const { data } = await AxiosInstance.put(`/task/${id}`, updateData);
    if (data?.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//add sub-task
export const createSubTask = async (id, postData) => {
  try {
    const { data } = await AxiosInstance.post(`/task/sub-task/${id}`, postData);
    if (data.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//delete task
export const trashedTask = async (id) => {
  try {
    const { data } = await AxiosInstance.get(`/task/trash/${id}`);
    if (data?.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//duplicate task
export const duplicateTasks = async (id) => {
  try {
    const { data } = await AxiosInstance.get(`/task/duplicate/${id}`);
    if (data.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//create activity
export const createActivity = async (id, postData) => {
  try {
    const { data } = await AxiosInstance.post(
      `/task/activities/${id}`,
      postData
    );
    if (data?.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//get trash task
export const getTrashTasks = async () => {
  try {
    const { data } = await AxiosInstance.get("/task/trashed-tasks/true");
    if (data.status) {
      return data.data;
    } else {
      toast.error(data.message);
      return null;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//restore task
export const restore_Task = async (id) => {
  try {
    const { data } = await AxiosInstance.delete(`/task/restore/${id}`);
    if (data.status) {
      toast.success("Task restored successfully");
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//delete task
export const delete_Task = async (id) => {
  try {
    const { data } = await AxiosInstance.delete(`/task/delete/${id}`);
    if (data.status) {
      toast.success("Task deleted successfully");
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//restore tasks
export const restore_Tasks = async () => {
  try {
    const { data } = await AxiosInstance.delete("/task/restore");
    if (data.status) {
      toast.success("Tasks restored successfully");
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//delete tasks
export const delete_Tasks = async () => {
  try {
    const { data } = await AxiosInstance.delete("/task/delete");
    if (data.status) {
      toast.success("Tasks deleted successfully");
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

// !Team Member API
//get team members
export const getTeamMembers = async () => {
  try {
    const { data } = await AxiosInstance.get("/user");
    return data?.data;
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//add team member
export const addTeamMember = async (data) => {
  try {
    const { data: response } = await AxiosInstance.post("/auth/register", data);
    if (response.status) {
      toast.success("Team member added successfully");
      return true;
    } else {
      toast.error(response.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//update team member
export const update_TeamMember = async (id, data) => {
  try {
    const { data: response } = await AxiosInstance.put(`/user/${id}`, data);
    if (response.status) {
      toast.success("Team member updated successfully");
      return true;
    } else {
      toast.error(response.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//delete team member
export const delete_TeamMember = async (id) => {
  try {
    const { data: response } = await AxiosInstance.delete(`/user/${id}`);
    if (response.status) {
      toast.success("Team member deleted successfully");
      return true;
    } else {
      toast.error(response.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//!Notifications

//get notifications
export const getNotifications = async () => {
  try {
    const { data } = await AxiosInstance.get("/notification");
    if (data.status) {
      return data.data;
    } else {
      toast.error(data.message);
      return null;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return null;
  }
};

//mark notification as read
export const markNotificationAsRead = async (userId, id) => {
  try {
    const { data: response } = await AxiosInstance.patch(
      `/notification/${userId}/${id}`
    );
    if (response.status) {
      toast.success("Notification marked as read");
      return true;
    } else {
      toast.error(response.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};

//mark all notifications as read
export const markNotificationsAsRead = async (id) => {
  try {
    const { data: response } = await AxiosInstance.patch(`/notification`);
    if (response.status) {
      toast.success("All notifications marked as read");
      return true;
    } else {
      toast.error(response.message);
      return false;
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message ?? "Server Error!");
    }
    return false;
  }
};
