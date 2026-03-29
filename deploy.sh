#!/bin/bash

# Deployment script for hometown-catering.com to Hostinger
# This script helps prepare and verify files before upload

set -e  # Exit on error

echo "🚀 Hometown Catering - Hostinger Deployment Script"
echo "=================================================="
echo ""

# Step 1: Build the project
echo "📦 Step 1: Building project..."
npm run build

# Step 2: Verify .htaccess exists
echo ""
echo "🔍 Step 2: Verifying .htaccess file..."
if [ -f "dist/.htaccess" ]; then
    echo "✅ .htaccess found in dist folder"
    echo "   Size: $(wc -c < dist/.htaccess) bytes"
else
    echo "❌ ERROR: .htaccess not found in dist folder!"
    exit 1
fi

# Step 3: List all files to be deployed
echo ""
echo "📋 Step 3: Files ready for deployment:"
echo "--------------------------------------"
ls -lah dist/ | grep -v "^d" | awk '{print $9, "(" $5 ")"}'

# Step 4: Count files
echo ""
TOTAL_FILES=$(ls -A dist/ | wc -l | xargs)
echo "📊 Total files/folders: $TOTAL_FILES"

# Step 5: Check for hidden files
echo ""
echo "🔎 Step 4: Checking for hidden files..."
HIDDEN_FILES=$(ls -la dist/ | grep "^\." | grep -v "^\.\.$" | grep -v "^\.$" | wc -l | xargs)
if [ "$HIDDEN_FILES" -gt 0 ]; then
    echo "✅ Found $HIDDEN_FILES hidden file(s) (including .htaccess)"
    ls -la dist/ | grep "^\." | grep -v "^\.\.$" | grep -v "^\.$"
else
    echo "⚠️  No hidden files found - this might be an issue!"
fi

# Step 6: Create deployment archive
echo ""
echo "📦 Step 5: Creating deployment archive..."
cd dist
tar -czf ../hometown-catering-deploy.tar.gz .
cd ..
echo "✅ Created: hometown-catering-deploy.tar.gz"
echo "   Size: $(wc -c < hometown-catering-deploy.tar.gz) bytes"

# Step 7: Final instructions
echo ""
echo "✅ BUILD COMPLETE!"
echo "=================="
echo ""
echo "📤 Next Steps - Upload to Hostinger:"
echo ""
echo "Option 1: File Manager Upload"
echo "  1. Login to https://hpanel.hostinger.com"
echo "  2. Go to Files → File Manager"
echo "  3. Navigate to public_html"
echo "  4. Delete old files"
echo "  5. Upload all files from the 'dist' folder"
echo "  6. Enable 'Show hidden files' to verify .htaccess is uploaded"
echo ""
echo "Option 2: Extract Archive on Server"
echo "  1. Upload hometown-catering-deploy.tar.gz to public_html"
echo "  2. Extract using File Manager or SSH:"
echo "     tar -xzf hometown-catering-deploy.tar.gz"
echo "  3. Delete the .tar.gz file after extraction"
echo ""
echo "🔍 After Upload - Verify:"
echo "  • Visit: https://hometown-catering.com/services"
echo "  • Visit: https://hometown-catering.com/about"
echo "  • Visit: https://hometown-catering.com/contact"
echo "  • All should work without 404 errors"
echo ""
echo "📞 Having issues? Check deployment_instructions.md for troubleshooting"
echo ""
