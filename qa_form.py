import sqlite3
import hashlib


def load_sqlite() -> sqlite3.Connection:
    db = sqlite3.connect('qa_form.db')
    db.enable_load_extension(False)
    db.execute("PRAGMA foreign_keys = ON")
    return db


def generate_qa_id(detail: str) -> str:
    return hashlib.sha256(detail.encode('utf-8')).hexdigest()[:8]


def qa_contents() -> str:
    return """
CREATE TABLE IF NOT EXISTS QA_CONTENTS (
    qa_id    CHAR(8)      PRIMARY KEY,
    qa_item  VARCHAR(8)   NOT NULL,
    qa_detail TEXT        NOT NULL
);
"""


def qa_guest() -> str:
    return """
CREATE TABLE IF NOT EXISTS QA_GUEST (
    guest_session_id  CHAR(8)     PRIMARY KEY,
    qa_id             CHAR(8)     NOT NULL,
    guest_name        VARCHAR(15) NOT NULL,
    company           VARCHAR(20) NOT NULL,
    dept              VARCHAR(20) NOT NULL,
    status            TEXT        NOT NULL DEFAULT 'OPEN',
    FOREIGN KEY (qa_id) REFERENCES QA_CONTENTS(qa_id)
);
"""


def qa_class() -> str:
    return """
CREATE TABLE IF NOT EXISTS QA_CLASS (
    class_id  INTEGER     PRIMARY KEY AUTOINCREMENT,
    qa_id     CHAR(8)     NOT NULL,
    qa_item   TEXT        NOT NULL,
    dept      VARCHAR(20),
    company   VARCHAR(20),
    FOREIGN KEY (qa_id) REFERENCES QA_CONTENTS(qa_id)
);
"""


if __name__ == '__main__':
    db = load_sqlite()
    db.executescript(qa_contents())
    db.executescript(qa_guest())
    db.executescript(qa_class())
    db.commit()
    db.close()
    print('DB initialized: qa_form.db')
