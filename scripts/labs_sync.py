import sqlite3
import json
import os
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).resolve().parents[1]
DB_PATH = Path("d:/AI-Platform/ai-platform-integrated/backend/database/labs.db")
JSON_DIR = BASE_DIR / "src" / "data"
JSON_PATH = JSON_DIR / "labs.json"

def sync_db_to_json():
    # Ensure JSON directory exists
    JSON_DIR.mkdir(parents=True, exist_ok=True)

    if not DB_PATH.exists():
        print(f"Error: Database not found at {DB_PATH}")
        return

    print(f"Connecting to database: {DB_PATH}")
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT * FROM labs ORDER BY ai_match_score DESC")
        rows = cursor.fetchall()
        
        labs = []
        for row in rows:
            # Map Row to dict, ensuring 'lab_name' is consistent with LabSelection.jsx
            lab_dict = dict(row)
            lab_dict['lab_name'] = lab_dict.get('lab')
            labs.append(lab_dict)

        print(f"Extracted {len(labs)} labs. Saving to {JSON_PATH}...")
        
        with open(JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(labs, f, indent=2)
            
        print("Sync complete!")

    except Exception as e:
        print(f"Failed to sync: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    sync_db_to_json()
