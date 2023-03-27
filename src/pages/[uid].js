import React, { useEffect, useState } from 'react';
import { useRouter, withRouter } from 'next/router';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Stack, Typography, useMediaQuery, Badge, TextareaAutosize } from '@mui/material';
import Link from 'Link';
// import { Html, Head, Main, NextScript } from 'next/document';

import Head from 'next/head';

// project imports
import Avatar from 'components/ui-component/extended/Avatar';
import ImagePlaceholder from 'components/ui-component/cards/Skeleton/ImagePlaceholder';
import AppBar from 'components/ui-component/extended/AppBar';
import FooterPage from 'components/landingpage/Footer';
import Error from './404';

//third party
import { motion } from 'framer-motion';

// assets

import { BACKEND_PATH } from 'config';
import axios from 'axios';
import { styled } from '@mui/system';

import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VerifiedIcon from '@mui/icons-material/Verified';

import TypeTabs from 'components/ui-elements/basic/UITabs/TypeTabs';

const Cover = '/assets/images/profile/img-profile-bg.png';
const images1 = '/assets/images/landing/living-room-with-yellow.png';
const images2 = '/assets/images/landing/footerBg-1.png';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${images2})`,
  backgroundSize: 'cover'
  // background: '#00000057',
}));

function AgentProfile({ userData, uids }) {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [agent, setAgent] = useState();
  const [error, setError] = useState();
  const router = useRouter();

  // const objectToPush = { od_partner: userData[0]?.od_partner };

  localStorage.setItem('od_partner_intro', userData[0]?.od_partner);

  userData[0]?.od_partner && router.push(`/register?ref=${uids}`);

  return null;
}

AgentProfile.getInitialProps = async (context) => {
  const uids = context.query.uid; // Get ID from slug `/book/1`

  const userData1 = await fetch(`${BACKEND_PATH}/api/partner/${uids}`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    });

  return {
    userData: userData1,
    uids: uids
  };
};

export default AgentProfile;
