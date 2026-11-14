import json
import re
import unittest
from pathlib import Path


class TrajectoryDurationTest(unittest.TestCase):
    def test_individual_trajectory_has_six_sessions_over_three_to_six_months(self):
        source = (Path(__file__).resolve().parents[1] / "src/routes/coaching-voor-mij.tsx").read_text()
        literal = re.search(r'children: ("[^\n]+")', source)
        self.assertIsNotNone(literal)
        schema = json.loads(json.loads(literal.group(1)))
        answer = next(item["acceptedAnswer"]["text"] for item in schema["mainEntity"] if item["name"] == "Hoe lang duurt een traject?")
        words = {"drie": 3, "zes": 6}
        duration = re.search(r'Gemiddeld (\w+) gesprekken, verspreid over (\w+) tot (\w+) maanden', answer)
        self.assertIsNotNone(duration)
        self.assertEqual(tuple(words.get(value) for value in duration.groups()), (6, 3, 6))


if __name__ == "__main__":
    unittest.main()