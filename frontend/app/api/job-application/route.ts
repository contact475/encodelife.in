import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phoneNumber', 'resumeLink', 'jobId'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate URL format for resume link
    try {
      new URL(body.resumeLink);
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid resume link format' 
        },
        { status: 400 }
      );
    }

    // Prepare data for Strapi
    const applicationData = {
      data: {
        fullName: body.fullName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        currentLocation: body.currentLocation || '',
        experience: body.experience || '',
        expectedSalary: body.expectedSalary || '',
        noticePeriod: body.noticePeriod || '',
        linkedinProfile: body.linkedinProfile || '',
        portfolioWebsite: body.portfolioWebsite || '',
        resumeLink: body.resumeLink,
        coverLetter: body.coverLetter || '',
        jobId: body.jobId,
        jobTitle: body.jobTitle || '',
        referralSource: body.referralSource || 'website',
        applicationStatus: 'submitted',
        submittedAt: new Date().toISOString(),
      }
    };

    // TODO: Replace with actual Strapi API call
    // const strapiResponse = await fetch(`${process.env.STRAPI_URL}/api/job-applications`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
    //   },
    //   body: JSON.stringify(applicationData)
    // });

    // For now, simulate successful submission
    console.log('Job application received:', applicationData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate application ID
    const applicationId = `EL-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId,
    });

  } catch (error) {
    console.error('Error processing job application:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Job Application API endpoint',
    methods: ['POST'],
  });
}