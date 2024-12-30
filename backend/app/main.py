from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas
from .database import engine, get_db
from .utils.test_generator import generate_test_questions
from fastapi.middleware.cors import CORSMiddleware
from typing import List

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/dashboard/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):
    total_tests = db.query(models.TestResult).count()
    results = db.query(models.TestResult).all()
    
    if not results:
        return {
            "total_tests": 0,
            "average_score": 0,
            "best_score": 0,
            "current_streak": 0
        }
    
    scores = [r.score for r in results]
    return {
        "total_tests": total_tests,
        "average_score": sum(scores) / len(scores),
        "best_score": max(scores),
        "current_streak": calculate_streak(results)
    }

@app.get("/dashboard/results", response_model=List[schemas.TestResult])
def get_test_results(db: Session = Depends(get_db)):
    return db.query(models.TestResult).order_by(models.TestResult.completed_at.desc()).all()

# ... existing endpoints ...