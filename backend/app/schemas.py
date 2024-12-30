from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime

class TestBase(BaseModel):
    name: str
    type: str
    level: str
    category: str
    difficulty: str
    item_count: int
    digit_count: int
    operator: str
    question_count: int
    time_limit: Optional[int] = None

class TestCreate(TestBase):
    pass

class Test(TestBase):
    id: int
    created_at: datetime
    questions: str
    user_id: int

    class Config:
        from_attributes = True

class TestResultCreate(BaseModel):
    test_id: int
    score: float
    completion_time: int
    answers: Dict[str, str]

class TestResult(TestResultCreate):
    id: int
    user_id: int
    completed_at: datetime

    class Config:
        from_attributes = True