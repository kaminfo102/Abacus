const API_URL = 'http://localhost:8000';

export async function createTest(testData: any) {
  const response = await fetch(`${API_URL}/tests/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testData),
  });
  return response.json();
}

export async function getTest(testId: number) {
  const response = await fetch(`${API_URL}/tests/${testId}`);
  return response.json();
}

export async function submitTestResult(resultData: any) {
  const response = await fetch(`${API_URL}/test-results/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resultData),
  });
  return response.json();
}