import sqlite3

def load_extention():
   db = sqlite3.connect('qa_form')
   # 拡張機能を有効化する
   db.enable_load_extension(True)
   sqlite_vec.load(db)
   # 必要なロードが終わればオフにする
   db.enable_load_extension(False)
   # システムプロンプト
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