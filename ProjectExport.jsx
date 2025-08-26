import React, { useState } from 'react';

const StepSection = ({ step, title, children, isActive, onClick }) => (
  <div className={`border rounded-lg mb-4 ${isActive ? 'border-blue-500 bg-blue-500/5' : 'border-slate-700'}`}>
    <button
      onClick={onClick}
      className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-800/50 rounded-t-lg"
    >
      <h3 className="text-lg font-semibold text-white flex items-center">
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
          {step}
        </span>
        {title}
      </h3>
      <span className="text-slate-400">{isActive ? '▼' : '▶'}</span>
    </button>
    {isActive && (
      <div className="p-4 pt-0">
        {children}
      </div>
    )}
  </div>
);

const CodeBox = ({ title, children }) => (
  <div className="bg-slate-900 rounded-lg p-4 mb-4">
    <div className="text-sm text-slate-400 mb-2">{title}</div>
    <div className="bg-slate-800 rounded p-3 text-green-300 font-mono text-sm overflow-x-auto whitespace-pre">
      {children}
    </div>
  </div>
);

export default function DeploymentGuide() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            🚀 Complete GitHub + Vercel Setup Guide
          </h1>
          <p className="text-slate-400 text-lg">
            Follow this detailed guide to deploy your AetherCode AI project to the web
          </p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
          <h2 className="text-yellow-300 font-semibold mb-2">📋 What You'll Need</h2>
          <ul className="text-yellow-100 space-y-1">
            <li>• A GitHub account (free)</li>
            <li>• A Vercel account (free)</li>
            <li>• The project files from ProjectExport.jsx (in this IDE)</li>
            <li>• About 15 minutes of your time</li>
          </ul>
        </div>

        <StepSection
          step={1}
          title="Create GitHub Account & Repository"
          isActive={activeStep === 1}
          onClick={() => setActiveStep(activeStep === 1 ? 0 : 1)}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">A. Create GitHub Account (if needed)</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Go to <strong className="text-blue-400">github.com</strong></li>
                <li>Click the green <strong>"Sign up"</strong> button (top right)</li>
                <li>Enter your email, create a password, choose a username</li>
                <li>Verify your email address when prompted</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">B. Create New Repository</h4>
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>Once logged in, look for the green <strong>"New"</strong> button (or the + icon in top right)</li>
                <li>Click <strong>"New repository"</strong></li>
                <li>
                  <strong>Repository settings:</strong>
                  <div className="bg-slate-800 rounded p-4 mt-2 space-y-2">
                    <div><strong>Repository name:</strong> <code className="text-green-400">aethercode-vercel-app</code></div>
                    <div><strong>Description:</strong> <code className="text-green-400">My AetherCode AI project deployed on Vercel</code></div>
                    <div><strong>Visibility:</strong> <span className="text-yellow-400">✓ Public</span> (required for free Vercel)</div>
                    <div><strong>Initialize repository:</strong> <span className="text-red-400">✗ Do NOT check any boxes</span></div>
                  </div>
                </li>
                <li>Click the green <strong>"Create repository"</strong> button</li>
              </ol>
            </div>

            <div className="bg-blue-500/20 border border-blue-500/30 rounded p-4">
              <h5 className="font-semibold text-blue-300 mb-2">What You'll See Next:</h5>
              <p className="text-blue-100">GitHub will show you a page with setup instructions. <strong>Ignore these for now</strong> - we'll add files through the web interface in the next step.</p>
            </div>
          </div>
        </StepSection>

        <StepSection
          step={2}
          title="Upload Project Files to GitHub"
          isActive={activeStep === 2}
          onClick={() => setActiveStep(activeStep === 2 ? 0 : 2)}
        >
          <div className="space-y-6">
            <div className="bg-green-500/20 border border-green-500/30 rounded p-4 mb-4">
              <h5 className="font-semibold text-green-300 mb-2">Before You Start:</h5>
              <p className="text-green-100">Open the <strong>ProjectExport.jsx</strong> component in this AetherCode IDE (in the components folder). You'll copy code from there.</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">A. Create the Required Folders</h4>
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>On your empty GitHub repository page, click <strong>"creating a new file"</strong></li>
                <li>In the "Name your file..." field, type: <code className="text-green-400">api/index.py</code>
                  <div className="text-sm text-slate-400 mt-1">Note: The "/" automatically creates a folder called "api"</div>
                </li>
                <li>Scroll down to find the large text box</li>
                <li>Go to <strong>ProjectExport.jsx</strong> in this IDE, find the <strong>"api/index.py"</strong> code block, and copy the entire content</li>
                <li>Paste it into the GitHub text box</li>
                <li>Scroll to bottom, type commit message: <code className="text-green-400">Add FastAPI backend</code></li>
                <li>Click green <strong>"Commit new file"</strong> button</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">B. Create All Required Files</h4>
              <p className="text-slate-400 mb-4">Repeat the same process for each file below. For each one: Click "Add file" → "Create new file" → Enter filename → Paste content → Commit</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CodeBox title="File 2: src/App.jsx">src/App.jsx
(Copy from ProjectExport.jsx)</CodeBox>
                <CodeBox title="File 3: src/main.jsx">src/main.jsx
(Copy from ProjectExport.jsx)</CodeBox>
                <CodeBox title="File 4: index.html">index.html
(Copy from ProjectExport.jsx)</CodeBox>
                <CodeBox title="File 5: package.json">package.json
(Copy from ProjectExport.jsx)</CodeBox>
                <CodeBox title="File 6: vercel.json">vercel.json
(Copy from ProjectExport.jsx)</CodeBox>
                <CodeBox title="File 7: vite.config.js">vite.config.js
(Copy from ProjectExport.jsx)</CodeBox>
                <CodeBox title="File 8: requirements.txt">requirements.txt
(Copy from ProjectExport.jsx)</CodeBox>
                <CodeBox title="File 9: README.md">README.md
(Copy from ProjectExport.jsx)</CodeBox>
              </div>
            </div>

            <div className="bg-purple-500/20 border border-purple-500/30 rounded p-4">
              <h5 className="font-semibold text-purple-300 mb-2">✅ Success Check:</h5>
              <p className="text-purple-100">Your repository should now have 2 folders (<strong>api/</strong> and <strong>src/</strong>) and 7 files in the root. If you see all files listed, you're ready for step 3!</p>
            </div>
          </div>
        </StepSection>

        <StepSection
          step={3}
          title="Create Vercel Account & Connect GitHub"
          isActive={activeStep === 3}
          onClick={() => setActiveStep(activeStep === 3 ? 0 : 3)}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">A. Create Vercel Account</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Go to <strong className="text-blue-400">vercel.com</strong></li>
                <li>Click <strong>"Start Deploying"</strong> or <strong>"Sign Up"</strong></li>
                <li><strong>IMPORTANT:</strong> Choose <strong>"Continue with GitHub"</strong> (this connects them automatically)</li>
                <li>GitHub will ask for permission - click <strong>"Authorize Vercel"</strong></li>
                <li>You might be asked to complete your Vercel profile - fill it out</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">B. First-Time Setup</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>You'll land on the Vercel dashboard</li>
                <li>If prompted, choose the <strong>"Hobby" plan</strong> (it's free)</li>
                <li>You might see a tutorial popup - you can skip it</li>
              </ol>
            </div>

            <div className="bg-blue-500/20 border border-blue-500/30 rounded p-4">
              <h5 className="font-semibold text-blue-300 mb-2">What You'll See:</h5>
              <p className="text-blue-100">The Vercel dashboard with a big button saying "Add New..." or "Import Project". This means you're ready to deploy!</p>
            </div>
          </div>
        </StepSection>

        <StepSection
          step={4}
          title="Deploy Your Project on Vercel"
          isActive={activeStep === 4}
          onClick={() => setActiveStep(activeStep === 4 ? 0 : 4)}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">A. Import Your Repository</h4>
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>On the Vercel dashboard, click the big <strong>"Add New..."</strong> button</li>
                <li>Select <strong>"Project"</strong> from the dropdown</li>
                <li>You'll see a list of your GitHub repositories</li>
                <li>Find <strong>"aethercode-vercel-app"</strong> and click <strong>"Import"</strong> next to it</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">B. Configure Deploy Settings</h4>
              <div className="bg-slate-800 rounded p-4 space-y-3">
                <div><strong className="text-yellow-300">Project Name:</strong> <span className="text-slate-300">aethercode-vercel-app</span> (or change it)</div>
                <div><strong className="text-yellow-300">Framework Preset:</strong> <span className="text-green-400">Vite</span> (should auto-detect)</div>
                <div><strong className="text-yellow-300">Root Directory:</strong> <span className="text-slate-300">. (leave as default)</span></div>
                <div><strong className="text-yellow-300">Build Command:</strong> <span className="text-slate-300">npm run build (auto-filled)</span></div>
                <div><strong className="text-yellow-300">Output Directory:</strong> <span className="text-slate-300">dist (auto-filled)</span></div>
              </div>
              <p className="text-slate-400 mt-2"><strong>Don't change anything</strong> - the defaults are perfect for our setup!</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">C. Deploy!</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Click the big blue <strong>"Deploy"</strong> button</li>
                <li>Vercel will start building your project (you'll see logs)</li>
                <li>Wait 2-3 minutes for the build to complete</li>
                <li>You'll see a success page with your live URL!</li>
              </ol>
            </div>

            <div className="bg-green-500/20 border border-green-500/30 rounded p-4">
              <h5 className="font-semibold text-green-300 mb-2">🎉 Success!</h5>
              <p className="text-green-100">Your app is now live! Vercel gives you a URL like <code>https://aethercode-vercel-app-abc123.vercel.app</code></p>
            </div>
          </div>
        </StepSection>

        <StepSection
          step={5}
          title="Test Your Live App & Troubleshooting"
          isActive={activeStep === 5}
          onClick={() => setActiveStep(activeStep === 5 ? 0 : 5)}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">A. Test Your Deployment</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Click on your live URL from Vercel</li>
                <li>You should see your beautiful React app with the gradient background</li>
                <li>The page should load and display the message from your Python backend</li>
                <li>Click "Test API Health" to test the backend endpoint</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">B. Common Issues & Solutions</h4>
              <div className="space-y-4">
                <div className="bg-red-500/20 border border-red-500/30 rounded p-4">
                  <strong className="text-red-300">Issue:</strong> Build failed
                  <p className="text-red-100 mt-1"><strong>Solution:</strong> Check that all files are named exactly as shown and contain the correct code from ProjectExport.jsx</p>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded p-4">
                  <strong className="text-yellow-300">Issue:</strong> Frontend loads but API doesn't work
                  <p className="text-yellow-100 mt-1"><strong>Solution:</strong> Make sure <code>api/index.py</code> exists and <code>vercel.json</code> is configured correctly</p>
                </div>
                <div className="bg-blue-500/20 border border-blue-500/30 rounded p-4">
                  <strong className="text-blue-300">Issue:</strong> Want to make changes
                  <p className="text-blue-100 mt-1"><strong>Solution:</strong> Edit files on GitHub, commit changes, and Vercel will automatically redeploy!</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">C. Next Steps</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Add a custom domain in Vercel settings (optional)</li>
                <li>Set up environment variables for production (if needed)</li>
                <li>Enable analytics to track your app's performance</li>
                <li>Make changes by editing files on GitHub - auto-deploys!</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded p-6 text-center">
              <h3 className="text-2xl font-bold text-green-300 mb-2">🚀 Congratulations!</h3>
              <p className="text-green-100">Your AetherCode AI project is now live on the internet and accessible to anyone!</p>
            </div>
          </div>
        </StepSection>

        <div className="mt-8 bg-slate-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">📞 Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
            <div>
              <strong>GitHub Issues:</strong>
              <ul className="text-sm space-y-1 mt-1">
                <li>• Check your file names exactly match</li>
                <li>• Make sure repository is public</li>
                <li>• Verify all files have content</li>
              </ul>
            </div>
            <div>
              <strong>Vercel Issues:</strong>
              <ul className="text-sm space-y-1 mt-1">
                <li>• Check the build logs for errors</li>
                <li>• Verify GitHub connection is active</li>
                <li>• Try redeploying from Vercel dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
