
-- Drop table

-- DROP TABLE projects;

CREATE TABLE projects (
	id INTEGER NOT NULL,
	name TEXT NOT NULL,
	description TEXT,
	completed NUMERIC DEFAULT 0 NOT NULL,
	CONSTRAINT projects_PK PRIMARY KEY (id)
);
