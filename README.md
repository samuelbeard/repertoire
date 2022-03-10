# Repertoire

# STILL IN DEVELOPMENT - DON'T USE YET

## Features
- Add your band's repertoire along with chords, recordings, and lyrics so they are easily accessible to all members.
- Password protect your repertoire so only you and your bandmates can see it.
- Add your bands shedule along with specific setlists for each gig.

## What this project is not
- It is not a music database.
- It is not a music player.
- It is not your bands website to promote your music.

# Installation instructions (For musicians/bands)
These instructons will show you how to set up your own version of this project that you can start adding your own music to. Here, I'll assume you don't have a working knowledge of web development and you simply want to get your own site setup.

1. Create a Netlify account.
Netlify is a free hosting service that allows you to host your own websites. It allows you to host, for free, your own version of this project along with a CMS that you can use to add your own stuff to.

2. Create a GitHub account.
Create an account on this site. This is where you will keep your own version of this project and where your band's stuff will be kept. (Although this original repository is public, your can be private if you want. We'll get to that later.)

3. Fork this repo.
This will create a copy of this repo that is yours to edit and add your own content to.

On this projects main Github page (https://github.com/samuelbeard/repertoire), click the "Fork" button near the top of the page.

4. Create site on Netlify

- On your Netlify dashboard, click on the "Create a new site" button.
- Click on the GitHub button and allow Netlify to access your Github account.
- Find this project in the list of repositories. Click it.
- On this next page, all the default settings are fine so just click "Deploy site".

Netlify will begin deploying your site. This is automated and will take a minute.

You might notice that Netlify has given this site a weird name (e.g competent-wiles-582e72). That's just a random, unique name given to the site - you can change that in the settings if you want to but it won't affect your site.

5. Enable Identity and Git Gateway

Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site.

- On your Netlify dashboard, under "Sites", click on the site you just created.
- Click on the "Site settings" tab. Then click on "Identity" on the left menu.
- Click "Enable Identity"
- Under Registration preferences, select "Invite only".
- Under "External providers" select "GitHub" and click "Enable" using the default configuration.
> You can also add Google as a provider if you'd rather log in with your Google account.
- Still on this page, scroll down to the "Services" section and click the "Enable Git Gateway" button.

You are not all set to manage your site's content.

6. Create an account for your site

Now that your site is set up and ready to go, you can create an account for it. This is different from your Netlify or GitHub accounts. It's the one you will use to log into your actual site.

- At the very top of the Netlify dashboard for your site, click on the "Identity" tab.
- Click on the "Invite users" button.
- Enter your email address here and click "Send"

> On the free Netlify account you can have 5 members who can access the admin side of your site. You can add them all here and remove them at any time.

- Go to your email, find the email that has just been sent and click on the "Accept the invite" link.
- You will be taken to the home page of your site and asked to create a password.
- Once you have created that password, add /admin onto the end of your sites url and you can now log into the admin side of your site.

7. Add your band's stuff to the CMS

At the top of your Netlify page for you site you will find the url to your site. It should end in ".netlify.app". If you ever change the name of your site on netlify, this url will change too.
