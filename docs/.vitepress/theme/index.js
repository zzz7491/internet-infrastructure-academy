// VitePress 主题扩展入口
// 注册所有自定义组件 —— 首页组件 + 章节组件 + 全局增强组件

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

// ===== 首页组件 =====
import HeroSection from './components/HeroSection.vue'
import WhyLearn from './components/WhyLearn.vue'
import FeatureCards from './components/FeatureCards.vue'
import KnowledgeSystem from './components/KnowledgeSystem.vue'
import CourseRoadmap from './components/CourseRoadmap.vue'
import ProjectShowcase from './components/ProjectShowcase.vue'
import LearningEnvironment from './components/LearningEnvironment.vue'
import FooterSection from './components/FooterSection.vue'

// ===== 章节页面组件 =====
import ChapterHeader from './components/ChapterHeader.vue'
import Introduction from './components/Introduction.vue'
import LearningGoals from './components/LearningGoals.vue'
import TipBox from './components/TipBox.vue'
import ArchitectureDiagram from './components/ArchitectureDiagram.vue'
import StepGuide from './components/StepGuide.vue'
import ScreenshotGallery from './components/ScreenshotGallery.vue'
import ExperimentBox from './components/ExperimentBox.vue'
import FAQBox from './components/FAQBox.vue'
import ChapterSummary from './components/ChapterSummary.vue'
import ChapterNavigation from './components/ChapterNavigation.vue'

export default {
  extends: DefaultTheme,
  // 使用自定义 Layout 注入全局增强组件
  Layout,

  enhanceApp({ app }) {
    // 首页组件
    app.component('HeroSection', HeroSection)
    app.component('WhyLearn', WhyLearn)
    app.component('FeatureCards', FeatureCards)
    app.component('KnowledgeSystem', KnowledgeSystem)
    app.component('CourseRoadmap', CourseRoadmap)
    app.component('ProjectShowcase', ProjectShowcase)
    app.component('LearningEnvironment', LearningEnvironment)
    app.component('FooterSection', FooterSection)

    // 章节页面组件
    app.component('ChapterHeader', ChapterHeader)
    app.component('ChapterIntroduction', Introduction)
    app.component('LearningGoals', LearningGoals)
    app.component('TipBox', TipBox)
    app.component('ArchitectureDiagram', ArchitectureDiagram)
    app.component('StepGuide', StepGuide)
    app.component('ScreenshotGallery', ScreenshotGallery)
    app.component('ExperimentBox', ExperimentBox)
    app.component('FAQBox', FAQBox)
    app.component('ChapterSummary', ChapterSummary)
    app.component('ChapterNavigation', ChapterNavigation)
  }
}
