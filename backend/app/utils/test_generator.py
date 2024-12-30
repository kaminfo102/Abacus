import random
from typing import List, Dict

def generate_number(digit_count: int) -> int:
    min_val = 10 ** (digit_count - 1)
    max_val = (10 ** digit_count) - 1
    return random.randint(min_val, max_val)

def generate_operators(operator_type: str, count: int) -> List[str]:
    operator_map = {
        "+-": ["+", "-"],
        "/": ["/"],
        "*": ["*"]
    }
    operators = operator_map[operator_type]
    return [random.choice(operators) for _ in range(count)]

def calculate_result(items: List[int], operators: List[str]) -> int:
    result = items[0]
    for i in range(len(operators)):
        if operators[i] == "+":
            result += items[i + 1]
        elif operators[i] == "-":
            result -= items[i + 1]
        elif operators[i] == "*":
            result *= items[i + 1]
        elif operators[i] == "/":
            result /= items[i + 1]
    return result

def generate_test_questions(
    item_count: int,
    digit_count: int,
    operator: str,
    question_count: int
) -> Dict:
    questions = []
    
    for _ in range(question_count):
        items = [generate_number(digit_count) for _ in range(item_count)]
        operators = generate_operators(operator, item_count - 1)
        result = calculate_result(items, operators)
        
        questions.append({
            "items": items,
            "operators": operators,
            "result": result
        })
    
    return {"questions": questions}