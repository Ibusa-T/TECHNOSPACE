import sqlite3

def load_sqlite():
   db = sqlite3.connect('qa_form')
   db.enable_load_extension(False)
   return db


def schema()-> str:
   return """
CREATE TABLE IF NOT EXISTS frontend_design_knowledge(
      layout_id INTEGER PRIMARY KEY AUTOINCREMENT,
      qa_item TEXT NOT NULL,
      detail TEXT NOT NULL,
);
"""


if __name__ == '__main__':
    print('Vector UX')    
    cursor = load_extention()
    cursor.executescript(schema())
    db.commit()
    print(f'vector_version {version}')