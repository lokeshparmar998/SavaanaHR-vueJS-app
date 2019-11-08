import Home from './components/home.vue'
import Blog from './components/blog.vue'
import Jobs from './components/jobs.vue'
import AppliedJobs from './components/appliedjobs.vue'

export const routes =[
    {path:'/', component:Home},
    {path:'/blog', component:Blog},
    {path:'/job', component:Jobs},
    {path:'/applied', component:AppliedJobs}
]