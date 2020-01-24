const DB = require("../data/db-config");
const TABLE = "tasks";

const getAll = () => {
	return DB(TABLE);
};
const getAllWithProjectInfo = () => {
	return DB(TABLE)
		.select([
			"projects.name as project_name",
			"projects.description as project_description",
			"tasks.id",
			"tasks.completed",
			"tasks.description",
			"tasks.notes"
		])
		.join("projects", "projects.id", "=", "tasks.project_id");
};
const getById = id => {
	return DB(TABLE).where({ id });
};

const insert = fields => {
	return DB(TABLE).insert(fields);
};

const update = (id, fields) => {
	return DB(TABLE)
		.where({ id })
		.update(fields);
};

const deleteEntry = ({ id }) => {
	return DB(TABLE)
		.where({ id })
		.delete();
};

module.exports = {
	getAll,
	insert,
	update,
	deleteEntry,
	getById,
	getAllWithProjectInfo
};
