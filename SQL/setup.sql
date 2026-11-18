CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  is_admin INTEGER NOT NULL
);

INSERT INTO users (name, is_admin) VALUES
  ('Marah', 1),
  ('Ali', 0),
  ('Sara', 0);