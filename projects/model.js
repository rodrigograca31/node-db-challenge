const DB = require("../data/db-config");
const TABLE = "projects";

const getAll = () => {
	return DB(TABLE);
};
// const getById = id => {
// 	return (
// 		DB(TABLE)
// 			.where("projects.id", "=", id)
// 			// .select(DB.raw("array_to_json(tasks.description) as tasks"))
// 			.join("tasks", "tasks.project_id", "=", "projects.id")
// 	);
// };
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
	getById
};
