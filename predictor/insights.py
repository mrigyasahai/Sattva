from s2t import Speech2Text
from sentAnal import Analyzer
import sys

file_path = sys.argv[1]

def results(file_name):

    stt = Speech2Text()
    transcription = stt.process(file_name)
    print(transcription)    
    analyzer = Analyzer()

    return analyzer.detect_emotion(transcription)
    

results(file_path)