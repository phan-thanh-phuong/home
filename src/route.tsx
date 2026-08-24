import { Route, Routes, HashRouter } from 'react-router-dom';
import { Home } from 'pages/home';

import { MasterLayout } from 'pages/_layout/master-layout';


import { LearningJapanVocabulary } from 'pages/learning/japan/vocabulary';
import { LearningJapanVocabularyDetail } from 'pages/learning/japan/vocabulary/detail';
import { LearningJapanVocabularyQuiz } from 'pages/learning/japan/vocabulary/quiz';
import { LearningJapanKanji } from 'pages/learning/japan/kanji';
import { LearningJapanKanjiDetail } from 'pages/learning/japan/kanji/detail';
import { LearningJapanKanjiQuiz } from 'pages/learning/japan/kanji/quiz';
import { LearningJapanKanjiWriting } from 'pages/learning/japan/kanji/writing';
import { LearningJapanExam } from 'pages/learning/japan/exam';
import { LearningJapanExamQuiz } from 'pages/learning/japan/exam/quiz';

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        

          <Route path="/learning/japan/vocabulary" element={<LearningJapanVocabulary />} />
          <Route path="/learning/japan/vocabulary/:level" element={<LearningJapanVocabularyDetail />} />
          <Route path="/learning/japan/vocabulary/:level/quiz" element={<LearningJapanVocabularyQuiz />} />
          <Route path="/learning/japan/kanji" element={<LearningJapanKanji />} />
          <Route path="/learning/japan/kanji/:categoryId" element={<LearningJapanKanjiDetail />} />
          <Route path="/learning/japan/kanji/:categoryId/quiz" element={<LearningJapanKanjiQuiz />} />
          <Route path="/learning/japan/kanji/:categoryId/writing" element={<LearningJapanKanjiWriting />} />
          <Route path="/learning/japan/exam" element={<LearningJapanExam />} />
          <Route path="/learning/japan/exam/:lesson/quiz" element={<LearningJapanExamQuiz />} />

        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};
