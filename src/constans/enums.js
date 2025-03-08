const Roles = {
  admin: "admin",
  manager: "manager",
  user: "user",
};

Object.freeze(Roles);


const taskStatus = {
  pending : "pending",
  inProgress : "inProgress",
  completed : "completed"
}

Object.freeze(taskStatus);

const TaskActions = {
  CREATED: "created",
  UPDATED: "updated",
  STATUS_CHANGED: "status_changed",
  COMMENTED: "commented",
};

Object.freeze(TaskActions);




module.exports = { Roles , taskStatus , TaskActions};
