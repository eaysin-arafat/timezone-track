// project import
import { RootState } from '@/app/store'
import menuItems from '@/constants/data/menu-items'
import NavItem from '@/layout/root-layout/drawer/content/NavItem'
import { generateUniqueId } from '@/utils/generate-unique-id'
import { List, Typography } from '@mui/material'
import { Box, SxProps } from '@mui/system'
import { useSelector } from 'react-redux'
import SimpleBar from 'simplebar-react'
// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  const simpleBarStyles: SxProps = {
    '.simplebarContent': {
      display: 'flex',
      flexDirection: 'column'
    }
  }

  const isDrawerOpen = useSelector((state: RootState) => state.sidebar.isDrawerOpen)

  const navGroups = menuItems.items.map(item => {
    return (
      <List
        key={generateUniqueId()}
        subheader={
          item.title &&
          isDrawerOpen && (
            <Box sx={{ pl: 3, mb: 1.5 }}>
              <Typography variant="subtitle2" color="textSecondary">
                {item.title}
              </Typography>
              {/* only available in paid version */}
            </Box>
          )
        }
        sx={{ mb: isDrawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
      >
        {item.children?.map(menuitem => (
          <NavItem key={generateUniqueId()} item={menuitem} level={1} />
        ))}
      </List>
    )
  })

  return (
    <>
      <SimpleBar style={simpleBarStyles}>
        {/* <Navigation /> */}
        <Box sx={{ pt: 2 }}>{navGroups}</Box>
        {/* <NavCard /> */}
      </SimpleBar>
    </>
  )
}
